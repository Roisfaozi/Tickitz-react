import React from 'react'
import { Input } from '../input'

function FilterMovie() {
  return (
    <div className='flex lg:flex-row flex-col gap-2 sm:gap-[10px] w-full h-full'>
      <div className='lg::w-1/2 w-full h-full min-h-11 flex items-start flex-col justify-center gap-3'>
        <p className='text-base font-semibold'>Cari Event</p>

        <form className='w-full'>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-secondary'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'></path>
              </svg>
            </div>
            <Input
              type='search'
              id='default-search'
              placeholder='New Born Expert'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray rounded-lg bg-white'
              required
            />
          </div>
        </form>
      </div>
      <div className='w-full h-full min-h-11 flex items-start flex-col justify-center lg:gap-5 gap-2'>
        <p className='text-base font-semibold'>Filter</p>
        <div className='sm:flex grid grid-cols-4 grid-rows-2 sm:item-start sm:gap-3 gap-2'>
          <div className='bg-primary w-full h-full py-1 sm:py-[10px] px-4 sm:px-6 text-white rounded-lg'>
            <p className='text-sm font-normal sm:font-semibold'>Thriller</p>
          </div>
          <div className='bg-transparent w-full h-full py-1 sm:py-[10px] px-4 sm:px-6 text-[#4E4B66] rounded-lg'>
            <p className='text-sm font-normal sm:font-semibold'>Thriller</p>
          </div>
          <div className='bg-transparent w-full h-full py-1 sm:py-[10px] px-4 sm:px-6 text-[#4E4B66] rounded-lg'>
            <p className='text-sm font-normal sm:font-semibold'>Romantic</p>
          </div>
          <div className='bg-transparent w-full h-full py-1 sm:py-[10px] px-4 sm:px-6 text-[#4E4B66] rounded-lg'>
            <p className='text-sm font-normal sm:font-semibold'>Adventure</p>
          </div>
          <div className='bg-transparent w-full h-full py-1 sm:py-[10px] px-4 sm:px-6 text-[#4E4B66] rounded-lg'>
            <p className='text-sm font-normal sm:font-semibold'>Sci-fi</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterMovie
