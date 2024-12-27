import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className='pl-5 border-6 border-black'>
    <Link to={`./post/${post.id}`} className='text-black dark:text-white'>
    <h2>{post.title}</h2>
    <p>{post.datetime}</p>
    </Link>
    <p className='mb-2'>
        {(post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...`}
    </p>
    </article>
  )
}

export default Post