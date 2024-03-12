import React from 'react'
import { Link } from 'react-router-dom'
import badge from '../assets/recommend.png'
import poster from '../assets/withces.png'
function MovieCard({ isRecommended, title, genre, posterImg }) {
  const bgUrl = `url(${badge})`
  const posterImage = ` url(${poster})`
  return (
    <div className='w-fit m-auto rounded-md'>
      <div
        className='relative sm:w-full max-h-[405px] max-w-[264px] sm:h-fit bg-cover bg-no-repeat bg-center h-[369px] w-60'
        style={{ backgroundImage: posterImage }}>
        <div
          className='absolute w-[135px] h-9 bg-no-repeat bg-cover px-[17px] -left-2 top-3.5'
          style={{ backgroundImage: bgUrl }}>
          <span className='text-white text-base'>Recommended </span>
        </div>
        <div className='md:h-[405px] md:w-[264px] w-full h-full transition-[background-color] duration-[0.25s] ease-linear inline-flex items-center justify-center rounded-[5px] hover:bg-[rgba(0,0,0,0.5)] image'>
          <div className='opacity-0 transition-transform duration-[0.24s] ease-[ease-in] delay-[0] flex flex-col gap-3 scale-0 poster'>
            <Link
              to={'/home'}
              className='no-underline text-sm px-[69px] py-3 rounded-[7px] first:border text-white border-solid border-white'>
              Details
            </Link>
            <Link
              to={'/home'}
              className='no-underline text-sm px-[69px] py-3 rounded-[7px] first:border bg-primary text-white'>
              Buy Ticket
            </Link>
          </div>
        </div>
      </div>
      <div className='px-0 py-5'>
        <h3 className='text-2xl font-bold leading-[34px] text-textTitle mb-[7px]'>
          The Witches
        </h3>
        <div className='inline-flex gap-[7px]'>
          <p className='text-center bg-[#a0a3bd1a] text-[#a0a3bd] text-base px-[18px] py-[5px] rounded-[30px]'>
            Action
          </p>
        </div>
        <div className='inline-flex gap-[7px]'>
          <p className='ext-center bg-[#a0a3bd1a] text-[#a0a3bd] text-base px-[18px] py-[5px] rounded-[30px]'>
            Adventure
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
