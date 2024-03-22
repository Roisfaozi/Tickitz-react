import { createBrowserRouter } from 'react-router-dom'
import Detail from './pages/Detail'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import MoviesList from './pages/MoviesList'
import RegisterPage from './pages/Register'
import AddMovie from './pages/admin/AddMovie'
import Dashboard from './pages/admin/Dashboard'
import ListMovie from './pages/admin/ListMovie'
import PrivateRoute from './privateRoute'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movies',
    element: <MoviesList />,
  },
  {
    path: '/movies/:id',
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
  {
    path: '/admin/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '/admin/list-movies',
    element: (
      <PrivateRoute>
        <ListMovie />
      </PrivateRoute>
    ),
  },
  {
    path: '/admin/add-movie',
    element: (
      <PrivateRoute>
        <AddMovie />
      </PrivateRoute>
    ),
  },
])
