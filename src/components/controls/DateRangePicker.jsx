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
      displayFormat='ddd, D MMM'
      verticalSpacing={0}
      hideKeyboardShortcutsPanel
      firstDayOfWeek={1}
      noBorder
      customArrowIcon={props.customArrowIcon}
      disabled={props.disabled}
    />
  )
}

export default DateRangePicker
