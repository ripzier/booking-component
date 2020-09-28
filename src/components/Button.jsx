import React from 'react'

const Button = ({children, className: classes}) => {
  return (
    <div
      className={`${classes}  md:text-xl text-white text-center bg-primary `}
    >
      {children}
    </div>
  )
}

export default Button
