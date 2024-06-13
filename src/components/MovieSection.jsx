import React from 'react'
import MovieCard from './MovieCard'

function MovieSection(props) {
  let movies
  if (props.movies !== undefined || props.movies) {
    movies = props.movies.data
  }

  return (
    <div className='w-full py-[50px] px-3'>
      <div className='flex items-center w-full justify-between'>
        <div
          className={`${
            !props.children
              ? 'text-center items-center'
              : 'text-center items-center md:text-start md:items-start'
          } inline-flex flex-col gap-5 w-full`}>
          <p className='text-lg font-semibold text-primary'>
            {props.sectionTag}
          </p>
          <h2 className='mb-6 text-3xl text-text-title max-w-[545px]'>
            {props.sectionTitle}
          </h2>
        </div>
        {props.children && props.children}
      </div>
      <div className='md:overflow-x-auto overflow-x-scroll w-full h-full flex gap-6'>
        {props.loading ? (
          <div className='animate-pulse flex flex-col gap-3'>
            <div className='h-[369px] w-60 bg-gray-300 rounded'></div>
            <div className='h-20 w-60 bg-gray-300 rounded'></div>
            <div className='h-15 w-40 bg-gray-300 rounded'></div>
            <div className='h-20 w-24 bg-gray-300 rounded'></div>
          </div>
        ) : (
          movies.map((movie, index) => (
            <MovieCard
              key={index}
              movies={movie}
              withRelease={props.withRelease}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default MovieSection
