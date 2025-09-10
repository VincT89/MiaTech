import React, { useState } from 'react'

export const Counter = () => {
const[count, setCount] = useState(0);

  return (
    <div className='flex items-center justify-center mt-100'>
      <p className='text-2xl font-bold'>Counter {count}</p>
    </div>
  )
}
