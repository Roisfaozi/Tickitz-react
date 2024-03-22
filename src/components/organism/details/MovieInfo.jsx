import React from 'react'
import poster from '../../../assets/tenet.png'
import { convertMinutesToHoursAndMinutes } from '../../../lib/utils'

function MovieInfo({ movie }) {
  const bgImage = `url(${movie.movie_id > 17 ? movie.poster_url : poster})`
  const genre = movie.genres.split(', ')

  return (
    <section className='lg:w-full md:w-[900px] w-[90%] max-w-desktop px-3 md:pb-0 pb-4 m-auto'>
      <div className='flex md:flex-row flex-col relative md:items-start items-center md:gap-4 gap-8 mb-8'>
        <div
          className=' bg-no-repeat bg-cover bg-center w-full  max-w-[264px] h-[405px] mt-[-300px] md:mt-[-163px] rounded-md'
          style={{ backgroundImage: bgImage }}></div>
        <div className='w-full md:w-[70%] flex md:mt-[30px] mt-0 flex-col md:items-start items-center gap-8'>
          <h1 className='md:text-start text-center text-[32px] font-semibold text-text-primary'>
            {movie.title}
          </h1>
          <div className='flex gap-3'>
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
          <div className='flex md:gap-28 gap-[30px] items-start'>
            <div className='flex flex-col gap-4 md:w-full w-1/2'>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-[#8692a6]'>Release date</p>
                <p className='text-base text-text-primary'>
                  {movie.release_date}
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-[#8692a6]'>Duration</p>
                <p className='text-base text-text-primary'>
                  {convertMinutesToHoursAndMinutes(movie.duration)}
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-4 md:w-full w-1/2'>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-[#8692a6]'>Directed by</p>
                <p className='text-base text-text-primary'>{movie.directors}</p>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-[#8692a6]'>Casts</p>
                <p className='text-base text-text-primary'>{movie.casts}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* synopsis */}
      <div className='md:w-[90%] w-full mb-[30px]'>
        <h2 className='text-black text-2xl font-semibold mb-3'>Synopsis</h2>
        <p className='text-secondary text-base mb-3 leading-8 tracking-wide'>
          {movie.synopsis}
        </p>
      </div>
      {/* synopsis */}
    </section>
  )
}

export default MovieInfo
