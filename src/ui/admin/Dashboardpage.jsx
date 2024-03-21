import React from 'react'
import ChartsContainer from '../../components/organism/admin/ChartsContainer'

function Dashboardpage() {
  const options = {
    xaxis: {
      categories: [
        'January',
        'February',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Mei',
      ],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    stroke: {
      width: 3,
    },
  }

  const series = [
    {
      name: 'Movies Sale',
      data: [320, 400, 580, 370, 315, 280],
      color: '#1D4ED8',
    },
  ]

  const movieOpt = [
    'Tenet',
    'Spiderman',
    'The hobbit and the battle of the five armies',
  ]

  const timeRange = ['Daily', 'Weekly', 'Monthly']

  const categoryOpt = ['Action', 'Adventure', 'Comedy']

  const location = ['Purwokerto', 'Yogyakarta', 'Jakarta']

  return (
    <main className='w-full h-full m-auto bg-[#F5F5F5] sm:py-14 py-11 inline-flex flex-col md:gap-12 gap-10'>
      <ChartsContainer
        data={options}
        series={series}
        titleSection='Sales Chart'
        movieTitle='Avengers: End Game'
        optionLeft={movieOpt}
        optionRight={timeRange}
      />
      <ChartsContainer
        data={options}
        series={series}
        titleSection='Ticket Sales'
        movieTitle='Adventure, Purwokerto'
        optionLeft={categoryOpt}
        optionRight={location}
      />
    </main>
  )
}

export default Dashboardpage
