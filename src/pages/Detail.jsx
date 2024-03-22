import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import poster from '../assets/spiderman.png'
import Footer from '../components/Footer'
import Header from '../components/Header'
import useApi from '../hooks/useAPI'
import { movieDummy } from '../lib/dumy'
import Moviedetails from '../ui/Moviedetails'

function Detail() {
  const params = useParams()
  const movieData = movieDummy.filter((movie) => movie.id == params.id)

  const api = useApi()
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const posterImage = `url(${
    movies.movie_id > 17 ? movies.poster_url : poster
  })`

  useEffect(() => {
    fetchMovies(params.id)
  }, [])
  async function fetchMovies(id) {
    try {
      setLoading(true)
      const response = await api.get(`/movies/${id}`)
      if (response.status === 200) {
        setMovies(response.data)
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
    <>
      <Header />
      <section className='w-screen max-w-[1366px] h-full m-auto'>
        {loading ? (
          <div className='w-full h-[413px] object-cover bg-no-repeat bg-cover lg:bg-top-center bg-80  animate-pulse duration-100'>
            <div className='bg-gray-200 w-full h-full'></div>
          </div>
        ) : (
          <div
            className='w-full h-[413px] object-cover bg-no-repeat  bg-cover lg:bg-top-center bg-80'
            style={{ backgroundImage: posterImage }}
          />
        )}
      </section>
      <Moviedetails movie={movies} loading={loading} />
      <Footer />
    </>
  )
}

export default Detail
