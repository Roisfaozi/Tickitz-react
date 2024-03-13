import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Button, buttonVariants } from './button'

function Header() {
  // const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const removeMobileMenuOnLargeScreen = () => {
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      if (screenWidth > 720) {
        setIsOpen(false)
        console.log(isOpen)
      }
    }

    window.addEventListener('resize', removeMobileMenuOnLargeScreen)

    return () => {
      window.removeEventListener('resize', removeMobileMenuOnLargeScreen)
    }
  }, [isOpen])
  return (
    <div className='w-full border-b-2 border-solid border-b-gray bg-white'>
      <header className='flex justify-between items-center h-[104px] max-w-[desktop] mx-auto my-0 lg:px-0 px-[10px]'>
        <div className='logo'>
          <Link to='/' rel='noopener noreferrer'>
            <img src={logo} alt='Tickitz' />
          </Link>
        </div>
        <nav className='max-w-265px m-auto;'>
          <ul className='sm:flex hidden items-center p-0 gap-[60px] list-none justify-center text-neutralGray900'>
            <li>
              <Link to='/' className='text-md no-underline text-neutralGray900'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/movies'
                className='text-md no-underline text-neutralGray900'>
                Movie
              </Link>
            </li>
            <li>
              <Link
                to='/ticket'
                className='text-md no-underline text-neutralGray900'>
                Buy Ticket
              </Link>
            </li>
          </ul>
          <Button
            variant='ghost'
            className='sm:hidden block cursor-pointer menu-icon'
            onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6Z'
                  fill='black'
                />
                <path
                  d='M4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18Z'
                  fill='black'
                />
                <path
                  d='M11 11C10.7348 11 10.4804 11.1054 10.2929 11.2929C10.1054 11.4804 10 11.7348 10 12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H11Z'
                  fill='black'
                />
              </svg>
            ) : (
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z'
                  fill='currentColor'
                  fillRule='evenodd'
                  clipRule='evenodd'></path>
              </svg>
            )}
          </Button>
        </nav>
        <div className='sm:flex hidden items-center justify-items-center gap-3'>
          <Link to='/login' className={buttonVariants({ variant: 'outline' })}>
            {' '}
            Log in
          </Link>
          <Link to='/register' className={buttonVariants()}>
            {' '}
            Sign Up
          </Link>
        </div>
      </header>
      {isOpen && (
        <div className='fixed w-full h-[70%] bg-white z-[999] sm:-left-full left-0 top-[106px]'>
          <ul className='flex flex-col w-full h-full items-center p-0 gap-[60px] list-none justify-center'>
            <li>
              <Link
                to='/'
                re
                className='text-3xl text-neutralGray900 no-underline font-bold'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/movies'
                className='text-3xl text-neutralGray900 no-underline font-bold'>
                Movie
              </Link>
            </li>
            <li>
              <Link
                to='/movies'
                className='text-3xl text-neutralGray900 no-underline font-bold'>
                Buy Ticket
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                {' '}
                Log in
              </Link>
            </li>
            <li>
              <Link to='/register' className={buttonVariants({ size: 'lg' })}>
                {' '}
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
