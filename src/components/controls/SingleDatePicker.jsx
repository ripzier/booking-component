import React from 'react'
import {SingleDatePicker as SDP} from 'react-dates'

const SingleDatePicker = (props) => {
  return (
    <SDP
      // Required Props
      date={props.date}
      id='date'
      onDateChange={props.onDateChange}
      focused={props.focused}
      onFocusChange={props.onFocusChange}
      // Additional Props
      hideKeyboardShortcutsPanel
    />
  )
}

export default SingleDatePicker
