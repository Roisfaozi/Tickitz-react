import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, buttonVariants } from '../../components/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '../../components/pagination'
import Select from '../../components/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/table'
import useApi from '../../hooks/useAPI'
import {
  convertMinutesToHoursAndMinutes,
  formatedReleaseDate,
} from '../../lib/utils'

const movieOpt = ['September 2023', 'December 2023', 'January 2024']

function TableListMovie() {
  const api = useApi()

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetchMovies(currentPage)
  }, [currentPage])

  function setPageQuery(pages) {
    setCurrentPage(pages)
  }

  async function fetchMovies(page) {
    try {
      setLoading(true)
      const response = await api.get(`/movies?page=${page}`)
      if (response.status === 200) {
        setMovies(response.data.data)
        setTotalPages(Math.ceil(parseInt(response.data.meta.total) / 10))
      } else {
        throw new Error('Failed to fetch movies')
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='w-full m-auto rounded-lg shadow-sm bg-white px-14 pt-14 pb-20 max-w-desktop '>
      <div className='flex flex-col md:flex-row justify-beteween items-center w-full mb-12 gap-3'>
        <div className='flex  justify-beteween items-center w-full'>
          <h1 className='md:text-3xl text-lg md:font-bold font-semibold w-full'>
            List Movie
          </h1>
          <Link
            to='/admin/add-movie'
            className={buttonVariants({
              className: 'flex gap-2 md:hidden',
            })}>
            <span>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.02255 3.75L9.00879 14.25'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M3.75 9H14.25'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>{' '}
            Add
          </Link>
        </div>
        <div className='flex justify-end items-center w-full'>
          <div className='md:w-fit w-full mx-auto'>
            <Select
              options={movieOpt}
              variant='silver'
              text='lg'
              optionWeight='medium'
              value='Movies Name'
              className='md:w-52 w-full'
              icon={
                <svg
                  width='24'
                  height='23'
                  viewBox='0 0 24 23'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19 8.85303L12.0368 14.997L5.07366 8.85303'
                    stroke='#A0A3BD'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              }
            />
          </div>

          <Link
            to='/admin/add-movie'
            className={buttonVariants({
              className: 'md:flex gap-2 hidden',
            })}>
            Add Movies
          </Link>
        </div>
      </div>

      {loading ? (
        <>
          <div className='animate-pulse flex flex-col gap-4'>
            <div className='p-2 w-full h-10 bg-gray-200 rounded-md' />
            <div className='p-2 w-full h-10 bg-gray-200 rounded-md' />
            <div className='p-2 w-full h-10 bg-gray-200 rounded-md' />
            <div className='p-2 w-full h-10 bg-gray-200 rounded-md' />
            <div className='p-2 w-full h-10 bg-gray-200 rounded-md' />
          </div>
        </>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className='*:text-center *:text-[#1F4173]'>
              <TableHead>No</TableHead>
              <TableHead className='w-[80px] font-medium'>Thumbnail</TableHead>
              <TableHead className='font-medium'>Movie Name</TableHead>
              <TableHead className='w-[150px] font-medium'>Category</TableHead>
              <TableHead className='w-[100px] font-medium'>
                Released Date
              </TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movies.map((movie) => (
              <TableRow
                className='*:text-center *:text-sm  *:text-[#1F4173] *:p-2'
                key={movie.movie_id}>
                <TableCell>{movie.movie_id}</TableCell>
                <TableCell>
                  <img
                    className='w-11 h-9 mx-auto rounded-xl'
                    src={movie.poster_url}
                    alt={movie.title}
                  />
                </TableCell>
                <TableCell className=' !text-primary text-sm'>
                  {movie.title}
                </TableCell>
                <TableCell>{movie.genres}</TableCell>
                <TableCell>{formatedReleaseDate(movie.release_date)}</TableCell>
                <TableCell className='text-right'>
                  {convertMinutesToHoursAndMinutes(movie.duration)}
                </TableCell>
                <TableCell className='flex justify-evenly gap-2'>
                  <ActionIcon movieId={movie.movie_id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <PaginationDemo
        totalPages={totalPages}
        pageQuery={setPageQuery}
        currentPage={currentPage}
      />
    </section>
  )
}
export default TableListMovie

export function PaginationDemo({ totalPages, currentPage, pageQuery }) {
  return (
    <Pagination className='my-16 '>
      <PaginationContent className='gap-5'>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1
          return (
            <PaginationItem key={index}>
              <Button
                variant='link'
                className={`md:w-10 w-8 md:h-10 h-8 sm:h-8 max-h-10 rounded-md  flex items-center justify-center text-base font-medium text-center m-auto focus:ring-0 focus:ring-offset-0 focus:ring-transparent ${
                  currentPage === pageNumber
                    ? 'bg-primary  text-white'
                    : 'bg-white  text-text-litle border border-text-gray'
                } `}
                isActive={currentPage === pageNumber}
                onClick={() => pageQuery(pageNumber)}>
                {pageNumber}
              </Button>
            </PaginationItem>
          )
        })}
      </PaginationContent>
    </Pagination>
  )
}

export const ActionIcon = ({ movieId }) => {
  const navigate = useNavigate()

  return (
    <>
      <Button
        onClick={() => navigate(`/movies/${movieId}`)}
        variant='icon'
        className='w-8 h-8 p-0 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:bg-primary/80 bg-primary'>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g clipPath='url(#clip0_114_10497)'>
            <path
              d='M9 3.375C5.25 3.375 2.0475 5.7075 0.75 9C2.0475 12.2925 5.25 14.625 9 14.625C12.7537 14.625 15.9525 12.2925 17.25 9C15.9525 5.7075 12.7537 3.375 9 3.375ZM9 12.75C6.93 12.75 5.25 11.07 5.25 9C5.25 6.93 6.93 5.25 9 5.25C11.07 5.25 12.75 6.93 12.75 9C12.75 11.07 11.07 12.75 9 12.75ZM9 6.75C7.75875 6.75 6.75 7.75875 6.75 9C6.75 10.2413 7.75875 11.25 9 11.25C10.2413 11.25 11.25 10.2413 11.25 9C11.25 7.75875 10.2413 6.75 9 6.75Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_114_10497'>
              <rect width='18' height='18' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </Button>
      <Button
        variant='icon'
        className='w-8 h-8 p-0 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:bg-[#5D5FEF]/80 bg-[#5D5FEF]'>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g clipPath='url(#clip0_114_10522)'>
            <path
              d='M2.25 12.9376V15.7501H5.0625L13.3612 7.45133L10.5487 4.63883L2.25 12.9376ZM15.5287 5.28383C15.8212 4.99133 15.8212 4.51508 15.5287 4.22258L13.7775 2.47133C13.485 2.17883 13.0087 2.17883 12.7162 2.47133L11.3438 3.84383L14.1562 6.65633L15.5287 5.28383Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_114_10522'>
              <rect width='18' height='18' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </Button>
      <Button
        variant='icon'
        className='w-8 h-8 p-0 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:bg-[#E82C2C]/80 bg-[#E82C2C]'>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g clipPath='url(#clip0_114_10472)'>
            <path
              d='M4.5 14.25C4.5 15.0787 5.17125 15.75 6 15.75H12C12.8287 15.75 13.5 15.0787 13.5 14.25V5.25H4.5V14.25ZM14.25 3H11.625L10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_114_10472'>
              <rect width='18' height='18' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </Button>
    </>
  )
}
