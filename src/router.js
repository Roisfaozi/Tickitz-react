import { createBrowserRouter } from 'react-router-dom'
import Detail from './pages/Detail'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/Register'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movies',
    element: <Detail />,
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
