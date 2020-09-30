const FOCUS = 'booking-mask/controls/FOCUS'
const UNFOCUS = 'booking-mask/controls/UNFOCUS'
const SUBMIT = 'booking-mask/controls/SUBMIT'
const CLOSE_ERROR = 'booking-mask/controls/CLOSE_ERROR'

const initialState = {
  errorMessage: null,
  focusedInput: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FOCUS:
      return {...state, focusedInput: action.control}
    case UNFOCUS:
      return {...state, focusedInput: null}
    case SUBMIT:
      return {
        ...state,
        errorMessage: action.errorMessage,
      }
    case CLOSE_ERROR:
      return {...state, errorMessage: null}
    default:
      return state
  }
}

export function focus(value) {
  return {
    type: FOCUS,
    control: value,
  }
}

export function unfocus() {
  return {
    type: UNFOCUS,
  }
}

export function submit(state) {
  const {
    airports: {origin, destination},
    flights: {departing, returning, roundtrip},
    passengers: {adults, children, infants},
  } = state

  const action = {type: SUBMIT}

  if (roundtrip && !returning) action.errorMessage = 'Choose a return date!'
  if (!departing) action.errorMessage = 'Choose a departure date!'
  if (origin && destination && origin.value === destination.value)
    action.errorMessage = 'Origin and Destination cannot be the same!'
  if (!destination) action.errorMessage = 'Choose a destination!'
  if (!origin) action.errorMessage = 'Choose an origin!'

  if (!action.errorMessage) {
    let flight_type, dates
    const departingDate = departing.format('YYYY-MM-DD')

    if (roundtrip) {
      flight_type = 'roundtrip'
      const returningDate = returning.format('YYYY-MM-DD')
      dates = `from-${departingDate}/to-${returningDate}`
    } else {
      flight_type = 'one-way'
      dates = `date-${departingDate}`
    }

    const deepLink = `https://www.swiss.com/us/en/Book/${flight_type}/${origin.value}-${destination.value}/${dates}/adults-${adults}/children-${children}/infants-${infants}`

    window.open(deepLink)
  }

  return action
}

export function closeError() {
  return {
    type: CLOSE_ERROR,
  }
}
