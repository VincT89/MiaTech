import React from 'react'

export const Card = ({children}) => {
  return (
    <div className='card border p-4 rounded shadow-lg bg-white text-center m-4 w-full'>
      {children}
    </div>
  )
}
