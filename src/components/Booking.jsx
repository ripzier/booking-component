import React from 'react'

import Airports from './Airports'
import Backdrop from './Backdrop'
import Error from './Error'
import Flights from './Flights'
import Links from './Links'
import Passengers from './Passengers'
import SearchButton from './SearchButton'

const Booking = () => {
  return (
    <div className='text-gray-333 grid grid-cols-1e md:grid-cols-2e lg:grid-cols-8e gap-3 md:gap-5 p-4 md:p-5 shadow-lg bg-gray-100'>
      <Backdrop />
      <Error />

      <Airports className='lg:col-span-3' />
      <Flights className='lg:col-span-3' />
      <Passengers className='lg:col-span-2' />
      <SearchButton className='lg:col-start-7 lg:col-span-2' />
      <Links className='md:col-span-2 lg:row-start-2 lg:col-span-6 flex items-center flex-wrap' />
    </div>
  )
}

export default Booking
