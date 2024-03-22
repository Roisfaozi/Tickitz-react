import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import TableListMovie from '../../ui/admin/TableListMovie'

function ListMovie() {
  const { isAuth } = useSelector((s) => s.users)
  const navigate = useNavigate()

  if (!isAuth) {
    navigate('/login')
  }

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
