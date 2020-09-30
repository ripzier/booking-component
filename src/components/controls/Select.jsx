import React from 'react'
import S from 'react-select'

const IndicatorsContainer = () => null

const Select = (props) => {
  return (
    <div className='flex items-center w-full'>
      <S
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: 0,
            borderWidth: 0,
            boxShadow: 0,
            color: '#333333',
            fontSize: '18px',
          }),
        }}
        className='flex-1'
        components={{IndicatorsContainer}}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        options={props.options}
      />
    </div>
  )
}

export default Select
