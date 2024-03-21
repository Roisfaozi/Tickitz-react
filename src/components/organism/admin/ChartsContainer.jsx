import React from 'react'
import { Button } from '../../button'
import Charts from './Charts'
import SelectDashboard from './SelectDashboard'

function ChartsContainer({
  titleSection,
  movieTitle,
  data,
  series,
  optionLeft,
  optionRight,
}) {
  return (
    <section className='w-full m-auto rounded-lg shadow-sm bg-white px-14 pt-14 pb-20 max-w-desktop'>
      <div className='md:inline-flex block justify-between mb-12 '>
        <div>
          <h5 className='leading-none text-2xl font-bold text-text-litle pb-5'>
            {titleSection}
          </h5>
          <div className='flex md:flex-row flex-col md:items-start items-center justify-center gap-y-6 gap-x-5'>
            <div className='flex md:flex-row flex-col md:items-start items-center justify-center gap-y-4 gap-x-4 w-full'>
              <SelectDashboard options={optionLeft} />
              <SelectDashboard options={optionRight} />
            </div>
            <Button className='w-full px-6'>Filter</Button>
          </div>
          <p className='text-base font-semibold text-[#151522] mt-9'>
            {movieTitle}
          </p>
        </div>
      </div>
      <Charts data={data} series={series} id='area-chart' />
    </section>
  )
}

export default ChartsContainer
