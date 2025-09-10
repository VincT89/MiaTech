import React from 'react'
import { useRef } from 'react';

export const UncontrolledInput = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    alert(`Valore corrente: ${inputRef.current.value}`)
  }
  return (
    <div className='flex items-center justify-center mt-100'>
      <input type="password" placeholder='Scrivi qui...' className='border p-2' ref={inputRef}  />
      <button onClick={handleClick} className="ml-4 p-2 text-white">
						Mostra
					</button>
    </div>
  )
}
