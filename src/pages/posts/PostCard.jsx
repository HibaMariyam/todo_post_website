import React from 'react'

const PostCard = (props) => {
  return (
    
    <div className='border-solid border-1 border-black p-4 bg-amber-300 m-10 rounded-lg '>
      <h1 className='text-3xl text-black-900 font-bold mb-3'>{props.title}</h1>
      <p>{props.body}</p>

    </div>
   
  )
}

export default PostCard
