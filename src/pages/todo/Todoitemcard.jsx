import React, { useState } from 'react'

const TodoItemCard = (props) => {
    const [isChecked,setisChecked]=useState(props.completed)
  return (
    <div className='flex flex-col gap-6 bg'>
     <div className='flex gap-6 border-solid border-1 border-black p-4 bg-amber-300 m-10 rounded-lg'>
     <p>{props.title}</p>
     <input type="checkbox" checked={isChecked}
     onChange={()=>{setisChecked(!isChecked)}}
     />
     </div>
   
    </div>
  )
}

export default TodoItemCard