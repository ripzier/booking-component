import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import options from '../assets/airportsList'
import airplaneIcon from '../assets/airplane.png'
import Select from './controls/Select'
import {setFrom, setTo} from '../redux/modules/airports'
import {focus, unfocus} from '../redux/modules/controls'

const Airports = ({className}) => {
  const {origin, destination} = useSelector((state) => state.airports)
  const {focusedInput} = useSelector((state) => state.controls)
  const dispatch = useDispatch()

  const focused = focusedInput === 'airports' ? 'focused' : ''

  const onOriginChange = useCallback(
    (value) => {
      dispatch(setFrom(value))
    },
    [dispatch]
  )

  const onDestinationChange = useCallback(
    (value) => {
      dispatch(setTo(value))
      dispatch(unfocus())
    },
    [dispatch]
  )

  const getFocus = useCallback(() => {
    if (!focused) {
      dispatch(focus('airports'))
    }
  }, [dispatch, focused])

  return (
    <div
      className={`flex items-center ${focused} bg-white border border-gray-light ${className}`}
      onClick={getFocus}
    >
      <Select
        placeholder='From'
        value={origin}
        onChange={onOriginChange}
        options={options}
      />
      <span>
        <img src={airplaneIcon} alt='airplane icon' width={40} />
      </span>
      <Select
        placeholder='To'
        value={destination}
        onChange={onDestinationChange}
        options={options}
      />
    </div>
  )
}

export default Airports
