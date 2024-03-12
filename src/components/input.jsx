import * as React from 'react'
import { cn } from '../lib/utils'

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-md border border-gray bg-transparent py-2 px-3 text-base placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-dray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ',
        className
      )}
      type='checkbox'
      ref={ref}
      {...props}
    />
  )
})
Checkbox.displayName = 'Checkbox'

const Label = React.forwardRef(({ className, for: forProp, ...props }, ref) => {
  return (
    <label
      htmlFor={forProp}
      className={cn(
        'text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Label.displayName = 'Label'

export { Checkbox, Input, Label }
