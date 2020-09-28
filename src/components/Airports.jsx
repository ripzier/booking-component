import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Select from './wrappers/Select'
import {setFrom, setTo} from '../redux/modules/airports'
import options from '../assets/airportsList'

const Airports = () => {
  const airports = useSelector((state) => state.airports)
  const dispatch = useDispatch()

  const onFromChange = useCallback((value) => dispatch(setFrom(value)), [
    dispatch,
  ])

  const onToChange = useCallback((value) => dispatch(setTo(value)), [dispatch])

  return (
    <div className='flex'>
      <Select value={airports.from} onChange={onFromChange} options={options} />
      <Select value={airports.to} onChange={onToChange} options={options} />
    </div>
  )
}

export default Airports
