import React from 'react'
import { useState } from 'react';

export const TextInput = () => {
  const [value, setValue] = useState("");
  return (
    <div className='flex items-center justify-center mt-100'>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Scrivi qualcosa...'
        className='border p-2'
      />
      <p className='text-2xl ml-5'>Hai scritto: {value}</p>
    </div>
  )
}
