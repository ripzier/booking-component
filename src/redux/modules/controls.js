const FOCUS = 'booking-mask/controls/FOCUS'
const UNFOCUS = 'booking-mask/controls/UNFOCUS'

const initialState = {
  focusedInput: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FOCUS:
      return {focusedInput: action.control}
    case UNFOCUS:
      return {focusedInput: ''}
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
