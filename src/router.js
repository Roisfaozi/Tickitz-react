import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/Register'

export default createBrowserRouter([
  {
    path: '/',
    element: <RegisterPage />,
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
