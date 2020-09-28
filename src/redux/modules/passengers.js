const DECREASE = 'booking-mask/passengers/DECREASE'
const INCREASE = 'booking-mask/passengers/INCREASE'
const SET = 'booking-mask/passengers/SET'
const VALIDATE = 'booking-mask/passengers/VALIDATE'

const initialState = {
  adults: 1,
  children: 0,
  infants: 0,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DECREASE:
      return {...state, [action.payload.type]: state[action.payload.type] - 1}
    case INCREASE:
      return {...state, [action.payload.type]: state[action.payload.type] + 1}
    case SET:
      return {...state, [action.payload.type]: action.payload.value}
    case VALIDATE:
      const {min, max, type} = action.payload
      return {
        ...state,
        [type]:
          state[type] > min ? (state[type] < max ? state[type] : max) : min,
      }

    default:
      return state
  }
}

export function decrease(payload) {
  return {
    type: DECREASE,
    payload,
  }
}

export function increase(payload) {
  return {
    type: INCREASE,
    payload,
  }
}

export function set(payload) {
  return {
    type: SET,
    payload,
  }
}

export function validate(payload) {
  return {
    type: VALIDATE,
    payload,
  }
}
