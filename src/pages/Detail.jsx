import React from 'react'
import { useParams } from 'react-router-dom'
import poster from '../assets/spiderman.png'
import Header from '../components/Header'
import { movieDummy } from '../lib/dumy'
import Moviedetails from '../ui/Moviedetails'
function Detail() {
  const params = useParams()
  const movieData = movieDummy.filter((movie) => movie.id == params.id)
  const posterImage = `url(${poster})`

  return (
    <>
      <Header />
      <section className='w-screen max-w-[1366px] h-full m-auto'>
        <div
          className='w-full h-[413px] object-cover bg-no-repeat  bg-cover lg:bg-top-center bg-80'
          style={{ backgroundImage: posterImage }}></div>
      </section>
      <Moviedetails movies={movieData[0]} />
    </>
  )
}

export default Detail
