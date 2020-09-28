const FOCUS = 'booking-mask/controls/FOCUS'
const UNFOCUS = 'booking-mask/controls/UNFOCUS'
const SUBMIT = 'booking-mask/controls/SUBMIT'

const initialState = {
  focusedInput: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FOCUS:
      return {focusedInput: action.control}
    case UNFOCUS:
      return {focusedInput: null}
    case SUBMIT:
      return state
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

  if (origin && destination && departing && returning) {
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

  return {
    type: SUBMIT,
  }
}
