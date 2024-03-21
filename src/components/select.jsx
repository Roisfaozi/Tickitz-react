import { cva } from 'class-variance-authority'
import { useState } from 'react'
import { cn } from '../lib/utils'

const selectVariants = cva(
  'transition-all  relative rounded-md shadow-lg sm:text-base text-titleInfo pl-3 pr-10 py-3 text-left cursor-default outline-none text-sm placeholder:text-secondary box-border disabled:opacity-50 disabled:cursor-not-allowed focus:ring-offset-2 focus:ring-blue-400',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white ring-1 ring-primary border-primary',
        secondary: 'bg-white text-titleInfo hover:bg-gray-100',
        outline: 'bg-transparent border border-primary',
        silver: 'bg-[#eff0f6] border-none font-medium box-border shadow-none',
      },
      size: {
        default: 'h-10 py-2 px-6',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-12 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const optionVariants = cva(
  'cursor-default select-none relative py-2 pl-3 pr-9  hover:bg-primary hover:text-white ',
  {
    variants: {
      text: {
        default: '*:*:sm:text-base *:*:text-sm ',
        sm: '*:*:sm:text-sm *:*:text-xs ',
        lg: '*:*:sm:text-lg text-base ',
      },
      weight: {
        default: '*:*:sm:font-normal',
        semibold: '*:*:sm:font-semibold',
        medium: '*:*:sm:font-medium',
        bold: '*:*:sm:font-bold',
      },
    },
    defaultVariants: {
      text: 'default',
      weight: 'default',
    },
  }
)

const SelectOption = ({
  value = '',
  active = false,
  updateValue,
  icon,
  text,
  weight,
  className,
}) => {
  const handleChange = (e) => {
    e.preventDefault()
    updateValue(value)
  }

  return (
    <li
      className={cn(
        optionVariants({ text, weight, className }),
        active && 'bg-primary *:text-white'
      )}
      onClick={handleChange}>
      <div className='flex items-center'>
        <span className='ml-3 block truncate'>{value}</span>
      </div>
      {active && (
        <span className='absolute inset-y-0 right-0 flex items-center pr-4'>
          {icon}
        </span>
      )}
    </li>
  )
}

const Select = ({
  name = 'customSelect',
  value = '-- Select Option --',
  options = [],
  icon,
  iconLeft,
  variant,
  size,
  optionWeight,
  optionText,
  className,
}) => {
  const [state, setState] = useState({
    value,
    showOptions: false,
  })

  const handleClick = (e) => {
    e.preventDefault()
    setState((prevState) => ({ ...prevState, showOptions: !state.showOptions }))
  }

  const updateValue = (value) => {
    setState((prevState) => ({ ...prevState, showOptions: false, value }))
  }

  return (
    <div className='relative '>
      <input type='hidden' name={name} value={state.value} />
      <button
        type='button'
        className={cn(selectVariants({ variant, size, className }))}
        onClick={handleClick}>
        <span className='mr-3 absolute inset-y-0 left-1 flex items-center pr-2 pointer-events-none'>
          {iconLeft}
        </span>
        <span className='flex items-center'>
          <span className='block truncate '>{state.value}</span>
        </span>
        <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
          {icon}
        </span>
      </button>
      {state.showOptions && (
        <div className='absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg'>
          <ul className='max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
            {options.map((option, idx) => (
              <SelectOption
                key={idx}
                value={option}
                active={state.value === option}
                updateValue={updateValue}
                weight={optionWeight}
                text={optionText}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Select
