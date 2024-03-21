import React from 'react'
import BookTikcets from '../components/organism/details/BookTikcets'
import MovieInfo from '../components/organism/details/MovieInfo'

function Moviedetails({ movie }) {
  return (
    <main className='w-full m-auto max-w-desktop bg-white'>
      <MovieInfo movie={movie} />
      <BookTikcets />
    </main>
  )
}

export default Moviedetails
