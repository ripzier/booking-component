import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import roundtripIcon from '../assets/roundtrip.png'
import onewayIcon from '../assets/oneway.png'
import DateRangePicker from './controls/DateRangePicker'
import {
  setDepartureDate,
  setReturnDate,
  toggleRoundtrip,
} from '../redux/modules/flights'
import {focus} from '../redux/modules/controls'

const CustomArrowIcon = () => {
  const {roundtrip} = useSelector((state) => state.flights)
  const dispatch = useDispatch()

  const changeType = useCallback(() => dispatch(toggleRoundtrip()), [dispatch])

  return (
    <div
      className='flex border border-gray-light rounded-full cursor-pointer'
      onClick={changeType}
    >
      <span className={`p-1 rounded-l-full ${roundtrip ? '' : 'toggled'}`}>
        <img src={onewayIcon} alt='roundtrip icon' width={18} />
      </span>
      <span className={`p-1 rounded-r-full ${roundtrip ? 'toggled' : ''}`}>
        <img src={roundtripIcon} alt='roundtrip icon' width={18} />
      </span>
    </div>
  )
}

const Flights = ({className}) => {
  const {departing, returning, roundtrip} = useSelector(
    (state) => state.flights
  )
  const {focusedInput} = useSelector((state) => state.controls)
  const dispatch = useDispatch()

  const focused = ['startDate', 'endDate'].includes(focusedInput)
    ? 'focused'
    : ''

  const setDates = useCallback(
    ({startDate, endDate}) => {
      dispatch(setDepartureDate(startDate))
      dispatch(setReturnDate(endDate))
    },
    [dispatch]
  )

  const setFocus = useCallback(
    (focusedInput) => dispatch(focus(focusedInput)),
    [dispatch]
  )

  return (
    <div
      className={`flex items-center bg-white border border-gray-light ${focused} ${className}`}
    >
      <DateRangePicker
        startDate={departing}
        endDate={returning}
        onDatesChange={setDates}
        focusedInput={focusedInput}
        onFocusChange={setFocus}
        customArrowIcon={<CustomArrowIcon />}
        disabled={roundtrip ? '' : 'endDate'}
      />
    </div>
  )
}

export default Flights
