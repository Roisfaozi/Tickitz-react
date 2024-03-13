import React from 'react'
import FilterMovie from '../components/organism/FilterMovie'
import MoviesGrid from '../components/organism/MoviesGrid'

function MoviesDisplay() {
  return (
    <section className='w-full h-full pt-12 m-auto max-w-[desktop] lg:px-0 px-[10px]'>
      <FilterMovie />
      <MoviesGrid />
      <div className='w-full h-auto my-16 flex items-center justify-center gap-5'>
        <div className='md:w-10 w-8 md:h-10 h-8 sm:h-8 max-h-10 rounded-full flex items-center justify-center bg-[#F9FAFB] first:bg-primary last:bg-primary first:text-white last:text-white text-secondary'>
          <p className='text-md font-medium text-center m-auto'>1</p>
        </div>
        <div className='md:w-10 w-8 md:h-10 h-8 sm:h-8 max-h-10 rounded-full flex items-center justify-center bg-[#F9FAFB] first:bg-primary last:bg-primary first:text-white last:text-white text-secondary'>
          <p className='text-md font-medium text-center m-auto'>2</p>
        </div>
        <div className='md:w-10 w-8 md:h-10 h-8 sm:h-8 max-h-10 rounded-full flex items-center justify-center bg-[#F9FAFB] first:bg-primary last:bg-primary first:text-white last:text-white text-secondary'>
          <p className='text-md font-medium text-center m-auto'>3</p>
        </div>
        <div className='md:w-10 w-8 md:h-10 h-8 sm:h-8 max-h-10 rounded-full flex items-center justify-center bg-[#F9FAFB] first:bg-primary last:bg-primary first:text-white last:text-white text-secondary'>
          <p className='text-md font-medium text-center m-auto'>4</p>
        </div>
        <div className='md:w-10 w-8 md:h-10 h-8 rounded-full flex items-center justify-center bg-[#F9FAFB] first:bg-primary last:bg-primary first:text-white last:text-white text-secondary'>
          <p className='text-md font-medium text-center m-auto'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M21 12H3'
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
          </p>
        </div>
      </div>
    </section>
  )
}

export default MoviesDisplay
