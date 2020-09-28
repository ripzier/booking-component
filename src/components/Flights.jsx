import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import DateRangePicker from './controls/DateRangePicker'
import {setDepartureDate, setReturnDate} from '../redux/modules/flights'
import {focus} from '../redux/modules/controls'

const Flights = () => {
  const flights = useSelector((state) => state.flights)
  const controls = useSelector((state) => state.controls)
  const dispatch = useDispatch()

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
    <DateRangePicker
      startDate={flights.departing}
      endDate={flights.returning}
      onDatesChange={setDates}
      focusedInput={controls.focusedInput}
      onFocusChange={setFocus}
    />
  )
}

export default Flights
