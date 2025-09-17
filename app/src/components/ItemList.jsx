import React from 'react'

export const ItemList = ({items}) => {
  return (
    <ul className='list-disc'>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
