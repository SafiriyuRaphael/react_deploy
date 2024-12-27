import React from 'react'
import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <main className='grid place-content-center flex-grow gap-4 text-3xl text-center'>
      <h2 className='mb-7'>Page Not Found</h2>
      <p>Well, that's dissapointing</p>
      <p>
        <Link to='/' className='visited:text-black underline'>Visit Our Homepage</Link>
      </p>
    </main>
  )
}

export default Missing