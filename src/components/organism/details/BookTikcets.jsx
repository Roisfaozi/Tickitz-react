import React from 'react'
import { Button } from '../../button'
import { Input, Label } from '../../input'
import MovieTheaterSelector from './MovieTheaterOption'
function BookTikcets({ movieId }) {
  return (
    <section className='lg:w-full md:w-[900px] w-[90%] flex flex-col items-center mb-6 max-w-desktop px-[10px] m-auto'>
      <h2 className='mb-4 text-[32px] max-w-md'>Book Tickets</h2>
      <form className='w-full flex md:flex-row flex-col items-end'>
        <div className='relative w-full'>
          <svg
            className='absolute -translate-y-1/2 left-[10px] text-titleInfo top-[62%]'
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z'
              stroke='#4E4B66'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M12 1.5V4.5'
              stroke='#4E4B66'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M6 1.5V4.5'
              stroke='#4E4B66'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M2.25 7.5H15.75'
              stroke='#4E4B66'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
          </svg>
          <Label
            for='date'
            className='block text-xl font-medium tracking-[0.5px] leading-[34px] mb-3'>
            Choose Date:
          </Label>
          <Input
            id='date'
            type='date'
            placeholder='date'
            className='md:w-[89%] w-full block my-3 h-[56px] pr-5 pl-10 mb-4 border-none bg-[#eff0f6] box-border '
            required
          />
          <svg
            className='sm:left-[93%] left-[91%] md:left-[77%] top-[62%] absolute -translate-y-1/2'
            width='17'
            height='8'
            viewBox='0 0 17 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M13.4585 3L8.52625 5.32106L3.594 3'
              stroke='#A0A3BD'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
          </svg>
        </div>
        <div className='relative w-full'>
          <svg
            className='absolute -translate-y-1/2 left-[10px] text-titleInfo top-[62%]'
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z'
              stroke='#4E4B66'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M12 1.5V4.5'
              stroke='#4E4B66'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M6 1.5V4.5'
              stroke='#4E4B66'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M2.25 7.5H15.75'
              stroke='#4E4B66'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
          </svg>
          <Label
            for='time'
            className='block text-xl font-medium tracking-[0.5px] leading-[34px] mb-3'>
            Choose Time:
          </Label>
          <Input
            id='time'
            type='time'
            value='08:30'
            placeholder='time'
            className='md:w-[89%] w-full block my-3 h-[56px] pr-5 pl-10 mb-4 border-none bg-[#eff0f6] box-border '
            required
          />
          <svg
            className='sm:left-[93%] left-[91%] md:left-[77%] top-[62%] absolute -translate-y-1/2'
            width='17'
            height='8'
            viewBox='0 0 17 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M13.4585 3L8.52625 5.32106L3.594 3'
              stroke='#A0A3BD'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
          </svg>
        </div>
        <div className='relative w-full'>
          <Label
            for='location'
            className='block text-xl font-medium tracking-[0.5px] leading-[34px] mb-3'>
            Choose Location :
          </Label>
          <svg
            className='absolute -translate-y-1/2 left-[10px] text-titleInfo top-[62%]'
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_1939_4388)'>
              <path
                d='M17.4301 16.2918L16.1998 12.6H14.8498L15.5995 16.2H2.40014L3.14984 12.6H1.79984L0.568636 16.2918C0.256336 17.2314 0.809836 18 1.79984 18H16.1998C17.1898 18 17.7433 17.2314 17.4301 16.2918ZM13.4998 4.5C13.4998 3.30653 13.0257 2.16193 12.1818 1.31802C11.3379 0.474106 10.1933 0 8.99984 0C7.80636 0 6.66177 0.474106 5.81786 1.31802C4.97394 2.16193 4.49984 3.30653 4.49984 4.5C4.49984 8.7975 8.99984 13.5 8.99984 13.5C8.99984 13.5 13.4998 8.7975 13.4998 4.5ZM6.56984 4.554C6.56984 3.2121 7.65704 2.1249 8.99984 2.1249C9.64419 2.1249 10.2622 2.38087 10.7178 2.8365C11.1734 3.29213 11.4294 3.91009 11.4294 4.55445C11.4294 5.19881 11.1734 5.81677 10.7178 6.2724C10.2622 6.72803 9.64419 6.984 8.99984 6.984C8.35536 6.984 7.73728 6.72798 7.28157 6.27227C6.82585 5.81656 6.56984 5.19848 6.56984 4.554Z'
                fill='#4E4B66'></path>
            </g>
            <defs>
              <clipPath id='clip0_1939_4388'>
                <rect width='18' height='18' fill='white'></rect>
              </clipPath>
            </defs>
          </svg>
          <select
            id='location'
            name='location'
            className='md:w-[89%] rounded-md w-full block my-3 h-[56px] pr-5 pl-10 mb-4 border-none bg-[#eff0f6] box-border placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-dray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'>
            <option value='purwokerto'>Purwokerto</option>
            <option value='banjarnegara'>Banjarnegara</option>
            <option value='purbalingga'>Purbalingga</option>
            <option value='wonosobo'>Wonosobo</option>
            <option value='kebumen'>Kebumen</option>
            <option value='magelang'>Magelang</option>
            <option value='temanggung'>Temanggung</option>
          </select>
        </div>
        <Button
          type='submit'
          size='lg'
          className='py-4 px-[76px] mb-4 text-center h-min'>
          Filter
        </Button>
      </form>
      <MovieTheaterSelector />
      <Pagiantion totalPages={4} page={1} />
      <Button size='lg' className='py-4 px-[76px] mb-4 text-center h-min mt-8'>
        Book Now
      </Button>
    </section>
  )
}

const Pagiantion = (props) => {
  const { totalPages, page } = props

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
  return (
    <div className='w-full flex justify-center gap-3'>
      {pages.map((pageNumber, i) => (
        <div
          key={i}
          className={`w-10 h-10 inline-flex border  items-center justify-center text-primary text-lg rounded-md ${
            pageNumber === page
              ? 'bg-primary text-white border-primary'
              : 'border-secondary text-primary'
          }`}>
          {pageNumber}
        </div>
      ))}
    </div>
  )
}

export default BookTikcets
