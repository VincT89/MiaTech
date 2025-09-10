import React from 'react'
import { useRef } from 'react';

export const UncontrolledInput = () => {
  const inputRef = useRef(null);
  return (
    <div className='flex items-center justify-center mt-100'>
      <input type="text" placeholder='Scrivi qui...' className='border p-2' ref={inputRef} />
    </div>
  )
}
