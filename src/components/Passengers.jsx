import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {decrease, increase, set, validate} from '../redux/modules/passengers'
import {focus, unfocus} from '../redux/modules/controls'
import PassengerInput from './controls/PassengerInput'

const Passengers = () => {
  const {adults, children, infants} = useSelector((state) => state.passengers)
  const {focusedInput} = useSelector((state) => state.controls)
  const dispatch = useDispatch()

  const total = adults + children + infants

  const open = focusedInput === 'passengers' ? '' : 'hidden'

  const decreaseValue = useCallback((payload) => dispatch(decrease(payload)), [
    dispatch,
  ])

  const increaseValue = useCallback((payload) => dispatch(increase(payload)), [
    dispatch,
  ])

  const setValue = useCallback((payload) => dispatch(set(payload)), [dispatch])

  const validateValue = useCallback((payload) => dispatch(validate(payload)), [
    dispatch,
  ])

  const changeFocus = useCallback(() => {
    if (focusedInput === 'passengers') {
      dispatch(unfocus())
    } else {
      dispatch(focus('passengers'))
    }
  }, [dispatch, focusedInput])

  return (
    <div className='bg-white border border-gray-light'>
      <div className='p-2 cursor-pointer' onClick={changeFocus}>
        <div className='text-xs text-gray-666 -mb-1'>
          {`${adults} Adult${adults === 1 ? '' : 's'} `}
          {`${children} Child${children === 1 ? '' : 'ren'} `}
          {`${infants} Infant${infants === 1 ? '' : 's'} `}
        </div>
        <div className='text-lg'>
          {`${total} Passenger${total === 1 ? '' : 's'} `}
        </div>
      </div>
      <div className={`${open} border-t  border-gray-light`}>
        <PassengerInput
          type='adults'
          range='12+'
          value={adults}
          decrease={decreaseValue}
          increase={increaseValue}
          setValue={setValue}
          validateValue={validateValue}
          min={1}
          max={40}
        />
        <PassengerInput
          type='children'
          range='2-11'
          value={children}
          decrease={decreaseValue}
          increase={increaseValue}
          setValue={setValue}
          validateValue={validateValue}
          min={0}
          max={39}
        />
        <PassengerInput
          type='infants'
          range='0-1'
          value={infants}
          decrease={decreaseValue}
          increase={increaseValue}
          setValue={setValue}
          validateValue={validateValue}
          min={0}
          max={20}
        />
        <button className='text-center py-4 w-full' onClick={changeFocus}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Passengers
