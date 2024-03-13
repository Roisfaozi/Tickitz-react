import React from 'react'
import { movieList } from '../lib/dumy'
import MovieCard from './MovieCard'

function MovieSection(props) {
  const movieSlice = movieList.slice(0, 4)

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
        {props.children}
      </div>

      <div className='md:overflow-x-auto overflow-x-scroll w-full h-fit flex gap-6'>
        {movieSlice.map((movie, index) => (
          <MovieCard
            key={index}
            movies={movie}
            withRelease={props.withRelease}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieSection
