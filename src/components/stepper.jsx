import { cva } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../lib/utils'

const stepWrapperVariants = cva(
  'flex justify-center items-center text-white rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-secondary',
        active: 'bg-primary',
        done: 'bg-[#008000]',
      },
      size: {
        default: 'w-12 h-12',
        sm: 'w-8 h-8',
        lg: 'w-16 h-16',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Stepper = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-between items-center gap-3',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Stepper.displayName = 'Stepper'

const Stepwrapper = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(stepWrapperVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Stepwrapper.displayName = 'Stepwrapper'

const StepNumber = React.forwardRef(({ className, variant, ...props }, ref) => {
  if (variant === 'done') {
    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M5 12L10 17L20 7'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    )
  }
  return (
    <p
      className={cn('text-white font-medium', className)}
      ref={ref}
      {...props}
    />
  )
})

StepNumber.displayName = 'StepNumber'

const StepDescription = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      className={cn('text-titleInfo text-base', className)}
      ref={ref}
      {...props}
    />
  )
})

StepDescription.displayName = 'StepDescription'

const StepDivider = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={cn('h-11', className)} ref={ref} {...props}>
      <svg
        width='70'
        height='1'
        viewBox='0 0 70 1'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M0 0.5H70' stroke='#A0A3BD' strokeDasharray='8 8' />
      </svg>
    </div>
  )
})

StepDivider.displayName = 'StepDivider'

export { StepDescription, StepDivider, StepNumber, Stepper, Stepwrapper }
