import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import PostCard from './PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { getPostData, setPostList, setisPostError } from '../../redux/slices/postSlice'
import TodoItemCard from '../todo/Todoitemcard'

const Post = () => {

const dispatch=useDispatch()

const postState=useSelector((state)=>state.post)
const todoState=useSelector((state)=>state.todo)

 useEffect(()=>{
  dispatch(getPostData())
 },[])

if(postState.isError){  
  return <p>Something went wrong</p>
}
if(postState.isLoading){
  return <p>Loading...</p>
}

  return (
   <>
   <div className='grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {
    postState.postList.map((post)=>{
      return <PostCard key={post.id} title={post.title} body={post.body}/>
    })
    }
    {
      todoState.todoList.map((todo)=>{
        return <TodoItemCard key={todo.id} title={todo.title} body={todo.body}/>
      })
    }
   </div>
   </>
  )
}

export default Post
