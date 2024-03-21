import React from 'react'
import Select from '../../select'

function SelectDashboard({ options }) {
  return (
    <div className='container mx-auto'>
      <Select
        options={options}
        variant='silver'
        text='lg'
        optionWeight='medium'
        value='Movies Name'
        className='md:w-52 w-full'
        icon={
          <svg
            width='24'
            height='23'
            viewBox='0 0 24 23'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M19 8.85303L12.0368 14.997L5.07366 8.85303'
              stroke='#A0A3BD'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        }
      />
    </div>
  )
}

export default SelectDashboard
