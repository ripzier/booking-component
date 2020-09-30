const SET_DEPARTURE_DATE = 'booking-mask/flights/SET_DEPARTURE_DATE'
const SET_RETURN_DATE = 'booking-mask/flights/SET_RETURN_DATE'
const TOGGLE_ROUNDTRIP = 'booking-mask/flights/TOGGLE_ROUNDTRIP'

const initialState = {
  departing: null,
  returning: null,
  roundtrip: true,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DEPARTURE_DATE:
      return {...state, departing: action.date}
    case SET_RETURN_DATE:
      return {...state, returning: action.date}
    case TOGGLE_ROUNDTRIP:
      return {...state, roundtrip: !state.roundtrip, returning: null}
    default:
      return state
  }
}

export function setDepartureDate(date) {
  return {
    type: SET_DEPARTURE_DATE,
    date,
  }
}

export function setReturnDate(date) {
  return {
    type: SET_RETURN_DATE,
    date,
  }
}

export function toggleRoundtrip() {
  return {
    type: TOGGLE_ROUNDTRIP,
  }
}
