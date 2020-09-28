const SET_FROM = 'booking-mask/airport/SET_FROM'
const SET_TO = 'booking-mask/airport/SET_TO'

const initialState = {
  from: {value: 'MIA', label: 'Miami (MIA)'},
  to: '',
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_FROM:
      return {...state, from: action.airport}
    case SET_TO:
      return {...state, to: action.airport}

    default:
      return state
  }
}

export function setFrom(airport) {
  return {
    type: SET_FROM,
    airport,
  }
}

export function setTo(airport) {
  return {
    type: SET_TO,
    airport,
  }
}
