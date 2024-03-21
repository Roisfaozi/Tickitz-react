import React from 'react'
import Header from '../../components/Header'
import AddMovieForm from '../../ui/admin/AddMovieForm'

function AddMovie() {
  return (
    <>
      <Header />
      <main className='w-full h-full bg-[#F5F5F5] sm:py-14 py-11 inline-flex flex-col md:gap-12 gap-10'>
        <AddMovieForm />
      </main>
    </>
  )
}

export default AddMovie
