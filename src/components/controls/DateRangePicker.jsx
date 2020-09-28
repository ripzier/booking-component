import React from 'react'
import {DateRangePicker as DRP} from 'react-dates'

const DateRangePicker = (props) => {
  return (
    <DRP
      // Required Props
      startDate={props.startDate}
      startDateId='startDate'
      endDate={props.endDate}
      endDateId='endDate'
      onDatesChange={props.onDatesChange}
      focusedInput={props.focusedInput}
      onFocusChange={props.onFocusChange}
      // Additional Props
      hideKeyboardShortcutsPanel
    />
  )
}

export default DateRangePicker
