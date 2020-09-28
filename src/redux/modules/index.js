import {combineReducers} from 'redux'

import airports from './airports'
import controls from './controls'
import flights from './flights'

export default combineReducers({
  airports,
  controls,
  flights,
})
