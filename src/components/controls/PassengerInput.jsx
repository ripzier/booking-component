import React from 'react'

const PassengerInput = ({min, max, value, type, ...props}) => {
  const decrement = value > min
  const increment = value < max

  const decrease = () => {
    props.decrease({type})
  }

  const increase = () => {
    props.increase({type})
  }

  const setValue = (e) => {
    props.setValue({value: e.target.value, type})
  }

  const validateValue = () => {
    props.validateValue({min, max, type})
  }

  return (
    <div className='flex justify-between items-center p-2 border-b border-gray-light'>
      <div>
        <div className='md:text-xl'>
          {type[0].toUpperCase() + type.slice(1)}
        </div>
        <div className='font-light text-gray-600 text-xs md:text-sm -mt-1'>
          {props.range} years
        </div>
      </div>
      <div>
        <button
          className={`square ${decrement ? '' : 'disabled'}`}
          onClick={decrease}
          disabled={!decrement}
        >
          -
        </button>
        <input
          className='square text-center'
          type='number'
          value={value}
          onChange={setValue}
          onBlur={validateValue}
        />
        <button
          className={`square ${increment ? '' : 'disabled'}`}
          onClick={increase}
          disabled={!increment}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default PassengerInput
