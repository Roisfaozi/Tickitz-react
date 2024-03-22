import React from 'react'
import MovieCard from '../MovieCard'

function MoviesGrid(props) {
  if (props.movies === 'data not found') {
    return (
      <div className='w-full h-full sm:p-0 p-[10px] mt-[55px]'>
        <div className='w-full m-auto'>
          <h3 className='text-4xl font-bold text-center'>
            {props.movies.charAt(0).toUpperCase() + props.movies.slice(1)}
          </h3>
        </div>
      </div>
    )
  }
  return (
    <div className='w-full h-full sm:p-0 p-[10px] mt-[55px]'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-x-3 gap-y-10'>
        {props.loading ? (
          <>
            <div className='animate-pulse flex flex-col gap-3'>
              <div className='h-[369px] w-60 bg-gray-300 rounded'></div>
              <div className='h-20 w-60 bg-gray-300 rounded'></div>
              <div className='h-15 w-40 bg-gray-300 rounded'></div>
              <div className='h-20 w-24 bg-gray-300 rounded'></div>
            </div>
            <div className='animate-pulse flex flex-col gap-3'>
              <div className='h-[369px] w-60 bg-gray-300 rounded'></div>
              <div className='h-20 w-60 bg-gray-300 rounded'></div>
              <div className='h-15 w-40 bg-gray-300 rounded'></div>
              <div className='h-20 w-24 bg-gray-300 rounded'></div>
            </div>
            <div className='animate-pulse flex flex-col gap-3'>
              <div className='h-[369px] w-60 bg-gray-300 rounded'></div>
              <div className='h-20 w-60 bg-gray-300 rounded'></div>
              <div className='h-15 w-40 bg-gray-300 rounded'></div>
              <div className='h-20 w-24 bg-gray-300 rounded'></div>
            </div>
            <div className='animate-pulse flex flex-col gap-3'>
              <div className='h-[369px] w-60 bg-gray-300 rounded'></div>
              <div className='h-20 w-60 bg-gray-300 rounded'></div>
              <div className='h-15 w-40 bg-gray-300 rounded'></div>
              <div className='h-20 w-24 bg-gray-300 rounded'></div>
            </div>
          </>
        ) : (
          props.movies.map((movie, index) => (
            <MovieCard key={index} movies={movie} />
          ))
        )}
      </div>
    </div>
  )
}

export default MoviesGrid
