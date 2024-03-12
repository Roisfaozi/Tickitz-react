import { createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/Register'

export default createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
])
