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
    <li key={index} className='mr-6 link'>
      <a href={`#${link}`}>{link}</a>
    </li>
  ))
  return (
    <ul className={`${classes} text-gray-666 text-sm md:text-base`}>{links}</ul>
  )
}

export default Links
