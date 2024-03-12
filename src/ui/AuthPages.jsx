import { useState } from 'react'
import { Link } from 'react-router-dom'
import background from '../assets/background.png'
import logo from '../assets/tickitz 1.png'
import { Button } from '../components/button'
import AuthForn from '../components/organism/AuthForn'
import Steps from '../components/organism/Steps'

const AuthPages = ({ authAction }) => {
  const bgUrl = `url(${background})`
  const [currentStep, setCurrentStep] = useState(1)
  const NUMBER_OF_STEPS = 3

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1))
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1))
  return (
    <div
      className='w-full h-screen bg-no-repeat bg-cover bg-center '
      style={{ backgroundImage: bgUrl }}>
      <div className='flex flex-col items-center relative top-[90px]'>
        <div className='logo'>
          <Link to='/' rel='noopener noreferrer'>
            <img src={logo} alt='Tickitz' />
          </Link>
        </div>
        <div className='bg-white rounded-md py-7 px-16 w-full max-w-lg'>
          {authAction === 'register' ? (
            <Steps currentStep={currentStep} stepTotal={NUMBER_OF_STEPS} />
          ) : (
            <LoginHeader />
          )}
          <AuthForn authAction={authAction} />
          <div className='flex items-center justify-betwwen w-full gap-8'>
            <hr className='h-px my-8 w-full bg-gray-200 border-0 dark:bg-gray-700'></hr>
            <p className='text-secondary text-xs'>Or</p>

            <hr className='h-px my-8 w-full bg-gray-200 border-0 dark:bg-gray-700'></hr>
          </div>
          <div className='flex md:justify-between justify-center gap-4'>
            <Button
              className='shadow-md gap-5 text-lg font-semibold'
              variant='social'
              size='lg'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z'
                  fill='#FFC107'
                />
                <path
                  d='M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z'
                  fill='#FF3D00'
                />
                <path
                  d='M12.0002 22.0001C14.5832 22.0001 16.9302 21.0116 18.7047 19.4041L15.6097 16.7851C14.5719 17.5743 13.3039 18.0011 12.0002 18.0001C9.39916 18.0001 7.19066 16.3416 6.35866 14.0271L3.09766 16.5396C4.75266 19.7781 8.11366 22.0001 12.0002 22.0001Z'
                  fill='#4CAF50'
                />
                <path
                  d='M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z'
                  fill='#1976D2'
                />
              </svg>
              <p className='sm:block hidden'> Google</p>
            </Button>
            <Button
              className='shadow-md gap-5 text-lg font-semibold'
              variant='social'
              size='lg'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12.001 2.00195C6.47895 2.00195 2.00195 6.47895 2.00195 12.001C2.00195 16.991 5.65795 21.127 10.439 21.88V14.892H7.89895V12.001H10.439V9.79795C10.439 7.28995 11.932 5.90695 14.215 5.90695C15.309 5.90695 16.455 6.10195 16.455 6.10195V8.56095H15.191C13.951 8.56095 13.563 9.33295 13.563 10.124V11.999H16.334L15.891 14.89H13.563V21.878C18.344 21.129 22 16.992 22 12.001C22 6.47895 17.523 2.00195 12.001 2.00195Z'
                  fill='#395185'
                />
              </svg>
              <p className='sm:block hidden'>Facebook</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const LoginHeader = () => {
  return (
    <>
      <h1 className='w-full text-start sm:text-3xl text-xl  text-text-primary font-bold sm:mb-6 mb-4'>
        Welcome Back👋
      </h1>
      <p className='sm:text-lg text-[13px]   text-secondary leading-[18px] mb-6'>
        Sign in with your data that you entered during your registration
      </p>
    </>
  )
}

export default AuthPages
