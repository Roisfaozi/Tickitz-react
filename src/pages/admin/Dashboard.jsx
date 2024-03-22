import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Dashboardpage from '../../ui/admin/Dashboardpage'

function Dashboard() {
  const { isAuth } = useSelector((s) => s.users)
  const navigate = useNavigate()

  if (!isAuth) {
    navigate('/login')
  }
  return (
    <>
      <Header />
      <Dashboardpage />
    </>
  )
}

export default Dashboard
