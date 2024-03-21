// MovieTheaterSelector.js - Komponen untuk memilih gedung teater untuk menonton film
import React, { useState } from 'react'

import TheaterOption from '../../theaterOptions'

const theaters = [
  { id: 1, name: 'Ebu' },
  { id: 2, name: 'Cineone' },
  { id: 3, name: 'Hiflix' },
  { id: 4, name: 'Ebu' },
]

const MovieTheaterSelector = () => {
  const [selectedTheater, setSelectedTheater] = useState(null)

  const handleTheaterSelect = (theaterId) => {
    setSelectedTheater(theaterId)
  }

  return (
    <div className='flex items-end flex-col w-full mt-4'>
      <div className='inline-flex h-fit w-full mb-9 gap-8'>
        <p className='md:block hidden font-semibold text-xl'>Choose Cinema</p>
        <p className=' font-bold text-lg text-[#8692a6]'>39 Result </p>
      </div>

      <div className='flex md:flex-row flex-col md:justify-between justify-center mb-9 w-full gap-4'>
        {theaters.map((theater) => (
          <TheaterOption
            key={theater.id}
            theater={theater}
            selected={selectedTheater === theater.id}
            onClick={() => handleTheaterSelect(theater.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieTheaterSelector
