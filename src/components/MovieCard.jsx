import React from 'react'
import { Link } from 'react-router-dom'
import badge from '../assets/recommend.png'
import poster from '../assets/tenet.png'
function movieCard({ movies, withRelease }) {
  const bgUrl = `url(${badge})`
  const posterImage = `url(${
    movies.movie_id > 17 ? movies.poster_url : poster
  })`
  const genre = movies.genres.split(', ')
  return (
    <div className='w-fit mx-auto rounded-md hover:shadow hover:transition-transform hover:scale-105 hover:duration-200 '>
      <div
        className='relative md:w-full max-h-[405px] rounded-md max-w-[264px] md:h-full bg-cover bg-no-repeat bg-center h-[369px] w-60'
        style={{
          backgroundImage: posterImage,
        }}>
        {movies.is_recommended ||
          (movies.movie_id % 2 === 0 && (
            <div
              className='absolute w-[135px] h-9 bg-no-repeat bg-cover px-[17px] -left-2 top-3.5'
              style={{ backgroundImage: bgUrl }}>
              <span className='text-white text-base'>Recommended </span>
            </div>
          ))}

        <div className='md:h-[405px] md:w-[264px] w-full h-full transition-[background-color] duration-[0.25s] ease-linear inline-flex items-center justify-center rounded-[5px] hover:bg-[rgba(0,0,0,0.5)] image'>
          <div className='opacity-0 transition-transform duration-[0.24s] ease-[ease-in] delay-[0] flex flex-col gap-3 scale-0 poster'>
            <Link
              to={`/movies/${movies.movie_id}`}
              className='no-underline text-sm px-[69px] py-3 rounded-[7px] first:border text-white border-solid border-white'>
              Details
            </Link>
            <Link
              to={'/'}
              className='no-underline text-sm px-[69px] py-3 rounded-[7px] first:border bg-primary text-white'>
              Buy Ticket
            </Link>
          </div>
        </div>
      </div>
      <div className='px-0 py-5 h-auto max-h-[200px]'>
        <h3 className='text-xl h-16 font-bold text-wrap leading-[34px] text-textTitle mb-[7px]'>
          {movies.title}
        </h3>
        {withRelease && (
          <p className='text-lg font-semibold text-primary mb-7'>
            {movies.release_date}
          </p>
        )}

        <div className='inline-flex gap-[7px]'>
          {genre.map((g, i) => (
            <p
              key={i}
              className='text-center bg-[#a0a3bd1a] text-[#a0a3bd] text-base px-[18px] py-[5px] rounded-[30px]'>
              {g}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default movieCard
