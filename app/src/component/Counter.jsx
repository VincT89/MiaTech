import React, { useState } from 'react'

export const Counter = () => {
const[count, setCount] = useState(0);

  return (
    <div className='flex items-center justify-center mt-100'>
      <div>
        <p className='text-2xl font-bold'>Counter {count}</p>
        <button onClick={() => setCount(count + 1)} className='mt-4 p-2 text-white'>
          Incrementa
        </button>
      </div>
    </div>
  )
}
