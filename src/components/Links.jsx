import React from 'react'

const list = [
  'Advanced search',
  'Arrivals and departures',
  'Inspire me',
  'Miles & More',
  'Check-in',
]

const Links = ({className: classes}) => {
  const links = list.map((link, index) => (
    <a className='mr-6' key={index} href={`#${link}`}>
      {link} <span className='text-primary align-text-top'>⯈</span>
    </a>
  ))
  return (
    <div className={`${classes} text-gray-666 text-sm md:text-base`}>
      {links}
    </div>
  )
}

export default Links
