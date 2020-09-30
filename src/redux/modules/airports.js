const SET_ORIGIN = 'booking-mask/airport/SET_ORIGIN'
const SET_DESTINATION = 'booking-mask/airport/SET_DESTINATION'

const initialState = {
  origin: {value: 'MIA', label: 'Miami (MIA)'},
  destination: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ORIGIN:
      return {...state, origin: action.airport}
    case SET_DESTINATION:
      return {...state, destination: action.airport}

    default:
      return state
  }
}

export function setFrom(airport) {
  return {
    type: SET_ORIGIN,
    airport,
  }
}

export function setTo(airport) {
  return {
    type: SET_DESTINATION,
    airport,
  }
}
