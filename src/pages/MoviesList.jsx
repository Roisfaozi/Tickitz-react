import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SubscribeSection from '../components/SubscribeSection'
import MoviesDisplay from '../ui/MoviesDisplay'

function MoviesList() {
  return (
    <>
      <Header />
      <main className='w-full h-full m-auto bg-white'>
        <section
          id='hero_image'
          className='relative bg-cover bg-no-repeat w-full :h-[262px] md:h-[362px] lg:h-[462px] bg-black flex flex-col items-center px-[10px] lg:px-10'>
          <div className='w-full h-full md:px-0 pt-9 sm:pt-15 md:pt-20 lg:pt-[104px] pb-7 px-[10px] max-w-desktop'>
            <p className='md:text-lg sm:text-base text-sm font-semibold leading-[34px] text-white'>
              LIST MOVIE OF THE WEEK
            </p>
            <h1 className='lg:text-5xl sm:text-3xl text-xl font-medium leading-6 sm:leading-10 lg:leading-[70px] tracking-[1px] text-white sm:w-1/2 w-3/4 mb-12 lg:mb-[71px]'>
              Experience the Magic of Cinema: Book Your Tickets Today
            </h1>
            <div className='w-full m-auto flex items-center justify-center gap-[11px]'>
              <div className='w-[43px] h-[6px] bg-primary rounded-md'></div>
              <div className='w-[5px] h-[5px] bg-white rounded-md'></div>
              <div className='w-[5px] h-[5px] bg-white rounded-md'></div>
            </div>
          </div>
        </section>
        <MoviesDisplay />
        <SubscribeSection className='max-w-desktop m-auto' />
      </main>
      <Footer />
    </>
  )
}

export default MoviesList
