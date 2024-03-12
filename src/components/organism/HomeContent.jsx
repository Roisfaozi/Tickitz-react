import React from 'react'
import hero from '../../assets/her-image.png'

function HomeContent() {
  return (
    <>
      <section className='w-full py-[50px] px-3 bg-white'>
        <div className='flex md:flex-row flex-col items-center md:justify-between  justify-center gap-5 text-center'>
          <div className='h-full w-full flex flex-col md:gap-4 gap-3'>
            <p className='text-lg md:text-start text-center font-bold text-primary'>
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </p>
            <h1 className='text-[32px] md:text-start text-center font-medium text-text-primary md:w-2/3'>
              Experience the Magic of Cinema: Book Your Tickets Today
            </h1>
            <p className='text-secondary md:text-start text-center'>
              Sign up and get the ticket with a lot of discount
            </p>
          </div>
          <div className='md:w-1/2 w-full m-auto'>
            <div className='inline-flex itme-center justif-center'>
              <img src={hero} alt='Tickitz' />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-[50px] px-3 bg-white'>
        <div className='flex flex-col flex-wrap text-start gap-3'>
          <p className='text-lg font-semibold text-primary'>Why Choose Us</p>
          <h2 className='mb-6 text-3xl text-text-primary'>
            Unleashing the Ultimate Movie Experience
          </h2>
          <div className='flex flex-wrap justify-center md:justify-between gap-5'>
            <div className='text-start w-full max-w-xs'>
              <div className='mb-5 w-14 h-14 rounded-full inline-flex items-center bg-[#d2dcf7]'>
                <svg
                  className='m-auto h-6 w-6'
                  width='18'
                  height='20'
                  viewBox='0 0 18 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.7281 19.9137C8.83884 19.9715 8.96266 20.0009 9.08649 20C9.21032 19.999 9.33314 19.9686 9.44489 19.9097L13.0128 18.0025C14.0245 17.4631 14.8168 16.8601 15.435 16.1579C16.779 14.6282 17.5129 12.6758 17.4998 10.6626L17.4575 4.02198C17.4535 3.25711 16.9511 2.57461 16.2082 2.32652L9.57073 0.0995642C9.17106 -0.0357592 8.73313 -0.0328174 8.3405 0.106428L1.72824 2.41281C0.989299 2.67071 0.495998 3.35811 0.500024 4.12397L0.542307 10.7597C0.555395 12.7758 1.31448 14.7194 2.68062 16.2335C3.3048 16.9258 4.10415 17.52 5.12699 18.0505L8.7281 19.9137ZM7.78357 12.1089C7.93257 12.2521 8.12586 12.3227 8.31916 12.3207C8.51245 12.3198 8.70474 12.2472 8.85172 12.1021L12.7508 8.2581C13.0438 7.96882 13.0408 7.50401 12.7448 7.21866C12.4478 6.9333 11.9696 6.93526 11.6766 7.22454L8.30808 10.5449L6.92885 9.21909C6.63186 8.93373 6.15467 8.93667 5.8607 9.22595C5.56774 9.51523 5.57076 9.98004 5.86775 10.2654L7.78357 12.1089Z'
                    fill='#1D4ED8'></path>
                </svg>
              </div>
              <h3 className='text-lg font-semibold mb-2 text-text-primary'>
                Guaranteed Tickets
              </h3>
              <p className='text-base-text-secondary'>
                Never miss a show! We guarantee your tickets so you can focus on
                enjoying the movie.
              </p>
            </div>
            <div className='text-start w-full max-w-xs'>
              <div className='mb-5 w-14 h-14 rounded-full inline-flex items-center bg-[#d2dcf7]'>
                <svg
                  className='m-auto h-6 w-6'
                  width='22'
                  height='21'
                  viewBox='0 0 22 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g clipPath='url(#clip0_1205_1146)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M11.2002 21C16.9992 21 21.7002 16.299 21.7002 10.5C21.7002 4.70101 16.9992 0 11.2002 0C5.4012 0 0.700195 4.70101 0.700195 10.5C0.700195 16.299 5.4012 21 11.2002 21ZM16.1618 8.24293C16.5463 7.85852 16.5463 7.23523 16.1618 6.85082C15.7774 6.4664 15.1542 6.4664 14.7698 6.85082L9.55957 12.061L7.63063 10.1321C7.24621 9.74765 6.62293 9.74765 6.23851 10.1321C5.85409 10.5165 5.85409 11.1398 6.23851 11.5242L8.86351 14.1491C9.24793 14.5336 9.87121 14.5336 10.2556 14.1491L16.1618 8.24293Z'
                      fill='#1D4ED8'></path>
                  </g>
                  <defs>
                    <clipPath id='clip0_1205_1146'>
                      <rect
                        width='21'
                        height='21'
                        fill='white'
                        transform='translate(0.700195)'></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className='text-lg font-semibold mb-2 text-text-primary'>
                Affordable Prices
              </h3>
              <p className='text-base-text-secondary'>
                Enjoy the latest movies at the best prices. We offer a variety
                of deals to fit your budget.
              </p>
            </div>
            <div className='text-start w-full max-w-xs'>
              <div className='mb-5 w-14 h-14 rounded-full inline-flex items-center bg-[#d2dcf7]'>
                <svg
                  className='m-auto h-6 w-6'
                  width='26'
                  height='23'
                  viewBox='0 0 26 23'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M2.52518 0C1.13633 0 0 1.04375 0 2.31945V16.2362L3.78776 12.757H15.1511C16.5399 12.757 17.6762 11.7132 17.6762 10.4375V2.31945C17.6762 1.04375 16.5399 0 15.1511 0H2.52518ZM20.2014 5.79863V10.4375C20.2014 12.9959 17.9363 15.0764 15.1511 15.0764H7.57553V16.2362C7.57553 17.5119 8.71186 18.5556 10.1007 18.5556H21.464L25.2518 22.0348V8.11808C25.2518 6.84238 24.1154 5.79863 22.7266 5.79863H20.2014Z'
                    fill='#1D4ED8'></path>
                </svg>
              </div>
              <h3 className='text-lg font-semibold mb-2 text-text-primary'>
                24/7 Customer Support
              </h3>
              <p className='text-base-text-secondary'>
                Our friendly customer support team is always available to help
                you with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeContent
