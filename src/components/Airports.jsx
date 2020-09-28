import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Select from './controls/Select'
import {setFrom, setTo} from '../redux/modules/airports'
import {focus, unfocus} from '../redux/modules/controls'
import options from '../assets/airportsList'

const Airports = () => {
  const airports = useSelector((state) => state.airports)
  const {focusedInput} = useSelector((state) => state.controls)

  const dispatch = useDispatch()

  const onOriginChange = useCallback((value) => dispatch(setFrom(value)), [
    dispatch,
  ])

  const onDestinationChange = useCallback((value) => dispatch(setTo(value)), [
    dispatch,
  ])

  const changeFocus = useCallback(() => {
    if (focusedInput === 'airports') {
      dispatch(unfocus())
    } else {
      dispatch(focus('airports'))
    }
  }, [dispatch, focusedInput])

  return (
    <div className='flex' onClick={changeFocus}>
      <Select
        value={airports.origin}
        onChange={onOriginChange}
        options={options}
      />
      <Select
        value={airports.destination}
        onChange={onDestinationChange}
        options={options}
      />
    </div>
  )
}

export default Airports
