import React, { useState } from 'react'
import { cn } from '../lib/utils'
import { Button } from './button'
import { Input } from './input'

function SubscribeSection({ className }) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      firstName: '',
      email: '',
    })
  }

  return (
    <div className={cn('w-full', className)}>
      <div className='bg-primary py-[50px] px-3 text-center rounded-3xl'>
        <div className='flex flex-col items-center'>
          <h2 className='md:text-5xl text-[32px] mb-3 text-white'>
            Subscribe to our newsletter
          </h2>
          <form
            onSubmit={handleSubmit}
            className='flex md:flex-row flex-col justify-center items-center text-white gap-5'>
            <Input
              id='firstname'
              name='firstName'
              type='firstname'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              className='my-3 md:h-16 md:pl-6'
              required
            />
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='my-3 md:h-16 md:pl-6'
              required
            />

            <Button
              variant='clean'
              type='submit'
              size='lg'
              className='md:w-[70%] w-full'>
              Subsctibe Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SubscribeSection
