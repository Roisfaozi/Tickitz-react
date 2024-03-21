import React from 'react'
import Chart from 'react-apexcharts'

const Charts = ({ data, series }) => {
  return <Chart options={data} series={series} type='area' />
}

export default Charts
