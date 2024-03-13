import React from 'react'
import { movieList } from '../../lib/dumy'
import MovieCard from '../MovieCard'

function MoviesGrid() {
  return (
    <div className='w-full h-full sm:p-0 p-[10px] mt-[55px]'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-x-2 gap-y-[39px]'>
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
  )
}

export default MoviesGrid
