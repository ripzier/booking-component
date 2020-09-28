import React from 'react'
import S from 'react-select'

const Select = (props) => {
  return (
    <S
      className='flex-1'
      value={props.value}
      onChange={props.onChange}
      options={props.options}
    />
  )
}

export default Select
