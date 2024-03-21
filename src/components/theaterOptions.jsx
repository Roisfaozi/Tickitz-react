import React from 'react'
import { Cineone, Ebu, Hiflix } from './icons'

const TheaterOption = ({ theater, selected, onClick, children }) => {
  const renderIcon = () => {
    switch (theater.name) {
      case 'Hiflix':
        return (
          <Hiflix
            className={`${selected ? 'w-[80%]' : 'w-2/3'}`}
            selected={selected}
          />
        )
      case 'Cineone':
        return (
          <Cineone
            className={`${selected ? 'w-[80%]' : 'w-2/3'}`}
            selected={selected}
          />
        )
      case 'Ebu':
        return (
          <Ebu
            className={`${selected ? 'w-[80%]' : 'w-2/3'}`}
            selected={selected}
          />
        )

      default:
        break
    }
  }

  return (
    <div
      className={` w-full h-[157px] border border-secondary rounded-md flex items-center justify-center p-4 cursor-pointer ${
        selected ? 'bg-primary text-white border-primary' : 'bg-white'
      } rounded-lg`}
      onClick={onClick}>
      {renderIcon()}
    </div>
  )
}

export default TheaterOption
