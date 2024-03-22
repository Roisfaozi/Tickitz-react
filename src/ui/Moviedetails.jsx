import React from 'react'
import BookTikcets from '../components/organism/details/BookTikcets'
import MovieInfo from '../components/organism/details/MovieInfo'

function Moviedetails({ movie, loading }) {
  return (
    <main className='w-full m-auto max-w-desktop bg-white'>
      {loading ? (
        <div className='lg:w-full md:w-[900px] w-[90%] max-w-desktop px-3 md:pb-0 pb-4 m-auto h-screen animate-pulse mt-4 rounded-md'>
          <div className='border  shadow rounded-md p-4 h-2/3 w-full mx-auto'>
            <div className='animate-pulse flex space-x-4'>
              <div className='rounded-md bg-slate-200 h-40 w-40'></div>
              <div className='flex-1 space-y-6 py-1'>
                <div className='h-20 bg-slate-200 rounded'></div>
                <div className='space-y-3'>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='h-16 bg-slate-200 rounded col-span-2'></div>
                    <div className='h-16 bg-slate-200 rounded col-span-1'></div>
                  </div>
                  <div className='h-5 bg-slate-200 rounded'></div>
                  <div className='h-5 bg-slate-200 rounded'></div>
                </div>
              </div>
            </div>
            <div className='space-y-3 mt-9'>
              <div className='h-5 bg-slate-200 rounded'></div>
              <div className='h-5 bg-slate-200 rounded'></div>
              <div className='h-5 bg-slate-200 rounded'></div>
              <div className='h-5 bg-slate-200 rounded'></div>
              <div className='h-5 bg-slate-200 rounded'></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <MovieInfo movie={movie} loading={loading} />
          <BookTikcets movieId={movie.movie_id} />
        </>
      )}
    </main>
  )
}

export default Moviedetails
