import React from 'react'
import Select from './select'

const DefaultExample = () => {
  const options = ['Option 1', 'Option 2', 'Option 3']

  return (
    <div className='container mx-auto '>
      <Select options={options} />
    </div>
  )
}

export { CustomExample, DefaultExample }
