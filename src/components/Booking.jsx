import React from 'react'

import Airports from './Airports'
import Flights from './Flights'
import Links from './Links'
import Passengers from './Passengers'
import SearchButton from './SearchButton'

const Booking = () => {
  return (
    <div className='text-gray-333 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 p-4 md:p-5 bg-gray-100'>
      <Airports />
      <Flights />
      <Passengers />
      <SearchButton className='lg:col-start-3' />
      <Links className='md:col-span-2 lg:row-start-2' />
    </div>
  )
}

export default Booking
