import React from 'react'
import Booking from './components/Booking'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-800'>
      <div className='w-full max-w-screen-xl mx-auto'>
        <Booking />
      </div>
    </div>
  )
}

export default App
