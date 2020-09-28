import React from 'react'

import Button from './Button'
import Links from './Links'

const Booking = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 p-4 md:p-5 bg-gray-100'>
      <div className='border border-gray-500 text-center text-2xl bg-white'>
        PLACEHODLER
      </div>
      <div className='border border-gray-500 text-center text-2xl bg-white'>
        PLACEHODLER
      </div>
      <div className='border border-gray-500 text-center text-2xl bg-white'>
        PLACEHODLER
      </div>
      <Button className='lg:col-start-3'>Search</Button>
      <Links className='md:col-span-2 lg:row-start-2' />
    </div>
  )
}

export default Booking
