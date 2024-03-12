import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button'
import { Checkbox, Input, Label } from '../input'

function AuthForn({ authAction }) {
  return (
    <>
      <form className='flex flex-col w-full max-w-[400px] items-start'>
        <div className='w-full h-auto'>
          <Label for='email' className='text-titleInfo'>
            Email
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='Email'
            value='kakaka'
            className='my-3 h-16 pl-6'
            required
          />
        </div>
        <div className='w-full h-auto relative'>
          <Label for='password' className='text-titleInfo block '>
            Password
          </Label>
          <Input
            id='password'
            type='password'
            placeholder='Password'
            value='kakaka'
            className='my-3 h-16 pl-6'
            required
          />
          <span className='absolute top-[50px] right-3'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_1939_4089)'>
                <path
                  d='M0.833008 9.99967C0.833008 9.99967 4.16634 3.33301 9.99967 3.33301C15.833 3.33301 19.1663 9.99967 19.1663 9.99967C19.1663 9.99967 15.833 16.6663 9.99967 16.6663C4.16634 16.6663 0.833008 9.99967 0.833008 9.99967Z'
                  stroke='#A0A3BD'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
                <path
                  d='M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z'
                  stroke='#A0A3BD'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </g>
              <defs>
                <clipPath id='clip0_1939_4089'>
                  <rect width='20' height='20' fill='white'></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <div className='w-full h-auto flex justify-start items-center gap-5'>
          <Checkbox className='w-5 h-5' />

          <Label
            for='email'
            className='text-secondary md:text-lg text-base font-normal'>
            I agree to terms & conditions
          </Label>
        </div>

        <Button type='submit' className='w-full my-6 font-bold rounded h-16'>
          {authAction}
        </Button>
        {authAction === 'register' ? (
          <p className='text-base font-medium text-start'>
            Already have an account?{' '}
            <Link to='/login' className='text-primary'>
              {' '}
              Log in
            </Link>
          </p>
        ) : (
          <p className='text-base text-primary text-right w-full'>
            Forgot your password?
          </p>
        )}
      </form>
    </>
  )
}

export default AuthForn
