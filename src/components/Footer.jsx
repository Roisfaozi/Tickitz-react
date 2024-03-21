import React from 'react'
import cineone from '../assets/cineone.svg'
import ebu from '../assets/ebu.svg'
import facebook from '../assets/facebook.svg'
import hiflix from '../assets/hiflix.svg'
import instagram from '../assets/instagram.svg'
import logo from '../assets/logo.svg'
import xtwitter from '../assets/xtwitter.svg'
import youtube from '../assets/youtube.svg'
function Footer() {
  return (
    <footer className='bg-white w-full px-0 py-10'>
      <div className='flex flex-col sm:flex-row justify-between max-w-desktop m-auto my-0'>
        <div className='flex-[1_0_13%] items-start justify-center px-2.5 py-6'>
          <div className='mb-2.5'>
            <a href='/' rel='noopener noreferrer'>
              <img src={logo} alt='logo' />
            </a>
          </div>
          <p className='text-textLabel text-base leading-normal'>
            Stop waiting in line. Buy tickets conveniently, watch movies
            quietly.
          </p>
        </div>

        <div className='flex-[1_0_13%] items-start justify-center px-2.5 py-6'>
          <h3 className='text-base font-bold mb-2.5 text-black'>Explore</h3>
          <ul className='flex flex-row flex-wrap sm:flex-col sm:gap-[14.5px] gap-[30px] h-fit m-0 p-0'>
            <li className='text-sm text-textLabel'>
              <a href='#'>Cinemas</a>
            </li>
            <li className='text-sm text-textLabel'>
              <a href='/movies'>Movies List</a>
            </li>
            <li className='text-sm text-textLabel'>
              <a href='#'>Notification</a>
            </li>
            <li className='text-sm text-textLabel'>
              <a href='/ticket'>My Tickets</a>
            </li>
          </ul>
        </div>

        <div className='flex-[1_0_13%] items-start justify-center px-2.5 py-6'>
          <h3 className='text-base font-bold mb-2.5 text-black'>Our Sponsor</h3>
          <ul className='flex sm:flex-col flex-row items-start sm:gap-[13.78px] gap-[10px] m-0 p-0'>
            <li className='flex-[1_0_33.33%]'>
              <a href='#'>
                <img
                  className='max-w-[200px] max-h-[31px] w-full h-full'
                  src={ebu}
                  alt=''
                  srcSet=''
                />
              </a>
            </li>
            <li className='flex-[1_0_33.33%]'>
              <a href='#'>
                <img
                  className='max-w-[200px] max-h-[31px] w-full h-full'
                  src={cineone}
                  alt=''
                  srcSet=''
                />
              </a>
            </li>
            <li className='flex-[1_0_33.33%]'>
              <a href='#'>
                <img
                  className='max-w-[200px] max-h-[31px] w-full h-full'
                  src={hiflix}
                  alt=''
                  srcSet=''
                />
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-[7px] px-2.5 py-6'>
          <h3 className='text-base font-bold mb-2.5 text-black'>Follow Us</h3>
          <div className='flex sm:flex-col flex-row sm:gap-4 gap-8'>
            <a
              href='#'
              className='flex items-center justify-items-center gap-4'>
              <img
                src={facebook}
                alt=''
                srcSet=''
                className='w-6 h-6 text-[#333]'
              />
              <p className='text-sm font-semibold sm:block hidden'>
                Tickitz Cinema id
              </p>
            </a>
            <a
              href='#'
              className='flex items-center justify-items-center gap-4'>
              <img
                src={instagram}
                alt=''
                srcSet=''
                className='w-6 h-6 text-[#333]'
              />
              <p className='text-sm font-semibold sm:block hidden'>
                tickitz.id
              </p>
            </a>
            <a
              href='#'
              className='flex items-center justify-items-center gap-4'>
              <img
                src={xtwitter}
                alt=''
                srcSet=''
                className='w-6 h-6 text-[#333]'
              />
              <p className='text-sm font-semibold sm:block hidden'>
                tickitz.id
              </p>
            </a>
            <a
              href='#'
              className='flex items-center justify-items-center gap-4'>
              <img
                src={youtube}
                alt=''
                srcSet=''
                className='w-6 h-6 text-[#333]'
              />
              <p className='text-sm font-semibold sm:block hidden'>
                Tickitz Cinema id
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className='max-w-desktop text-center mt-5 m-auto'>
        <p className='text-[13px] font-light px-2.5 py-6 text-textLabel'>
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
