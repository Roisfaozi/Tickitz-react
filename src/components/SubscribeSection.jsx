import React from 'react'
import { Button } from './button'
import { Input } from './input'

function SubscribeSection() {
  return (
    <div className='w-full'>
      <div className='bg-primary py-[50px] px-3 text-center rounded-3xl'>
        <div className='flex flex-col items-center'>
          <h2 className='md:text-5xl text-[32px] mb-3 text-white'>
            Subscribe to our newsletter
          </h2>
          <form className='flex md:flex-row flex-col justify-center text-white gap-5'>
            <Input
              id='firstname'
              type='firstname'
              placeholder='First Name'
              value='kakaka'
              className='my-3 md:h-16 md:pl-6'
              required
            />
            <Input
              id='email'
              type='email'
              placeholder='Email'
              value=''
              className='my-3 md:h-16 md:pl-6'
              required
            />

            <Button variant='clean' type='submit'>
              Subsctibe Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SubscribeSection
