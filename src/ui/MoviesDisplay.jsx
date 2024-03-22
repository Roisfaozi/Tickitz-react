import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import FilterMovie from '../components/organism/FilterMovie'
import MoviesGrid from '../components/organism/MoviesGrid'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '../components/pagination'
import useApi from '../hooks/useAPI'

function MoviesDisplay() {
  const { token } = useSelector((s) => s.users)
  const api = useApi()
  const [searchParams, setSearchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetchMovies(currentPage)
  }, [currentPage])

  async function fetchMovies(page, title = '') {
    try {
      setLoading(true)
      const response = await api.get(`/movies?page=${page}&title=${title}`)
      if (response.status === 200) {
        setMovies(response.data.data)
        setTotalPages(Math.ceil(parseInt(response.data.meta.total) / 10))
        setSearchParams({ page: page })
      } else {
        throw new Error('Failed to fetch movies')
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  function handleSearch(query) {
    setCurrentPage(1)
    setSearchParams({ page: currentPage })
    fetchMovies(1, query)
  }

  function goToNextPage() {
    if (totalPages !== currentPage) setCurrentPage(currentPage + 1)
  }

  function setPageQuery(pages) {
    setCurrentPage(pages)
    setSearchParams({ page: currentPage })
  }

  function handleFilterGenre(genre) {
    setCurrentPage(1)
    setSearchParams({ page: currentPage })
    setMovies(() => {
      setLoading(true)
      let filter = movies.filter((movie) => movie.genres.includes(genre))
      if (filter.length < 1) {
        filter = movies
      }
      setLoading(false)
      return filter
    })
  }

  return (
    <section className='w-full h-full pt-12 m-auto max-w-desktop lg:px-0 px-[10px]'>
      <FilterMovie onSearch={handleSearch} onFilter={handleFilterGenre} />
      <MoviesGrid loading={loading} movies={movies} />

      <Pagination className='my-16 '>
        <PaginationContent className='gap-5'>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  className={`md:w-10 w-8 md:h-10 h-8 sm:h-8 max-h-10 rounded-full flex items-center justify-center text-base font-medium text-center m-auto focus:ring-0 focus:ring-offset-0 focus:ring-transparent ${
                    currentPage === pageNumber
                      ? 'bg-primary  text-white'
                      : 'bg-[#F9FAFB]   text-secondary'
                  } `}
                  isActive={currentPage === pageNumber}
                  onClick={() => setPageQuery(pageNumber)}>
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          })}
          <PaginationLink
            className={`md:w-10 w-8 md:h-10 h-8 sm:h-8 max-h-10 rounded-full flex items-center justify-center text-base font-medium text-center m-auto focus:ring-0 focus:ring-offset-0 focus:ring-transparent bg-primary  text-white
             `}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            isActive>
            <p className='text-base font-medium text-center m-auto'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M21 12H3'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
                <path
                  d='M15 6L21 12L15 18'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
            </p>
          </PaginationLink>
        </PaginationContent>
      </Pagination>
    </section>
  )
}

export default MoviesDisplay
