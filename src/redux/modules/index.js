import {combineReducers} from 'redux'

import airports from './airports'
import controls from './controls'
import flights from './flights'
import passengers from './passengers'

export default combineReducers({
  airports,
  controls,
  flights,
  passengers,
})
