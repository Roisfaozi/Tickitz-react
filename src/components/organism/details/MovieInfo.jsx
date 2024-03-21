import React from 'react'
import poster from '../../../assets/tenet.png'

function MovieInfo({ movie }) {
  const bgImage = `url(${poster})`

  return (
    <section className='lg:w-full md:w-[900px] w-[90%] max-w-desktop px-3 md:pb-0 pb-4 m-auto'>
      <div className='flex md:flex-row flex-col relative md:items-start items-center md:gap-4 gap-8 mb-8'>
        <div
          className=' bg-no-repeat bg-contain bg-center w-full  max-w-[264px] h-[405px] mt-[-300px] md:mt-[-163px] rounded-md'
          style={{ backgroundImage: bgImage }}></div>
        <div className='w-full md:w-[70%] flex md:mt-[30px] mt-0 flex-col md:items-start items-center gap-8'>
          <h1 className='md:text-start text-center text-[32px] font-semibold text-text-primary'>
            {movie.title}
          </h1>
          <div className='flex gap-3'>
            {movie.genres.map((genre, i) => (
              <div key={i} className='inline-flex gap-2'>
                <p className='text-center rounded-full py-[5px] bg-[#a0a3bd1a] px-4 text-secondary md:text-base text-sm'>
                  {genre}
                </p>
              </div>
            ))}
          </div>
          <div className='flex md:gap-28 gap-[30px] items-start'>
            <div className='flex flex-col gap-4 md:w-full w-1/2'>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-[#8692a6]'>Release date</p>
                <p className='text-base text-text-primary'>
                  {movie.release_date}
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-[#8692a6]'>Duration</p>
                <p className='text-base text-text-primary'>
                  2 hours 13 minutes
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-4 md:w-full w-1/2'>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-[#8692a6]'>Directed by</p>
                <p className='text-base text-text-primary'>Jon Watss</p>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-sm text-[#8692a6]'>Casts</p>
                <p className='text-base text-text-primary'>
                  Tom Holland, Michael Keaton, Robert Downey Jr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* synopsis */}
      <div className='md:w-[90%] w-full mb-[30px]'>
        <h2 className='text-black text-2xl font-semibold mb-3'>Synopsis</h2>
        <p className='text-secondary text-base mb-3 leading-8 tracking-wide'>
          Thrilled by his experience with the Avengers, Peter returns home,
          where he lives with his Aunt May, under the watchful eye of his new
          mentor Tony Stark, Peter tries to fall back into his normal daily
          routine - distracted by thoughts of proving himself to be more than
          just your friendly neighborhood Spider-Man - but when the Vulture
          emerges as a new villain, everything that Peter holds most important
          will be threatened.
        </p>
      </div>
      {/* synopsis */}
    </section>
  )
}

export default MovieInfo
