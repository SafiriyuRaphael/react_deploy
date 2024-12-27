import React from 'react'
import { useStoreState } from 'easy-peasy'

const Footer = () => {
  const postCount = useStoreState((state)=> state.postCount)
  return (
    <footer className='bg-blue-400 w-full text-center p-3 dark:bg-slate-400 dark:text-[#E0E0E0] md:text-[1.5rem] fixed bottom-0 '>
      <p>{postCount} Blog Posts</p>
    </footer>
    
  )
}

export default Footer