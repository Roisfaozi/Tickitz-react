import React from 'react'
import Header from '../../components/Header'
import TableListMovie from '../../ui/admin/TableListMovie'

function ListMovie() {
  return (
    <>
      <Header />
      <main className='w-full h-full bg-[#F5F5F5] sm:py-14 py-11 inline-flex flex-col md:gap-12 gap-10'>
        <TableListMovie />
      </main>
    </>
  )
}

export default ListMovie
