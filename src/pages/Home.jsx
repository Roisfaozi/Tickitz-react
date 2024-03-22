import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MovieSection from '../components/MovieSection'
import SubscribeSection from '../components/SubscribeSection'
import HomeContent from '../components/organism/HomeContent'

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true)
        const response = await fetch(
          'http://localhost:8001/api/v1/movies?pageSize=10'
        )
        if (response.ok) {
          const data = await response.json()
          setMovies(data)
        } else {
          throw new Error('Failed to fetch movies')
        }
      } catch (error) {
        console.tabel('Error fetching movies:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return (
    <>
      <Header />
      <main className='w-full max-w-desktop h-full m-auto bg-white'>
        <HomeContent />
        <MovieSection
          sectionTag='Movies'
          sectionTitle='Exciting Movies That Should Be Watched Today'
          movies={movies}
          loading={loading}
        />
        <MovieSection
          sectionTag='UPCOMING MOVIES'
          sectionTitle='Exciting Movie Coming Soon'
          withRelease={true}
          movies={movies}
          loading={loading}
          children={<Arrow />}
        />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  )
}

const Arrow = () => {
  return (
    <div className='md:inline-flex hidden gap-3'>
      <div className='rounded-full p-5 bg-secondary'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3 12L21 12'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'></path>
          <path
            d='M9 18L3 12L9 6'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'></path>
        </svg>
      </div>
      <div className='rounded-full p-5 bg-primary'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M21 12L3 12'
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
      </div>
    </div>
  )
}
export default Home
