import React, { useEffect, useState } from 'react'
import TodoItemCard from './Todoitemcard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoData } from '../../redux/slices/todoSlice'


const Todo = () => {
 
  const dispatch=useDispatch()
  //dispatch function is used to send actions to the Redux store, which will then be handled by reducers to update the state.
  const todoState=useSelector((state)=>state.todo)
  //useSelector((state) => state.todo): Retrieves the todo slice from the Redux store state.
//todoState Represents the entire state object of the todo slice, including its properties (todoList, isLoading, isError).
//useSelector is a hook that allows you to access the state of a Redux store.

  useEffect(()=>{
    //useEffect is used to run side effects in functional components like fetching data from an API or updating the DOM.
    dispatch(getTodoData())
    },[])
  
    // ()=>{
    //   const getTodoData=async()=>{
    //     try {
    //       // const resp= await fetch("https://json-placeholder.mock.beeceptor.com/todos")
    //       // if(!resp.ok){
    //       //   throw new Error("Something went wrong")
    //       // }
    //       // const data= await resp.json()
    //       // settodoList(data)

    //       const response=await axios.get("https://json-placeholder.mock.beeceptor.com/todos")
    //       //first we have to dispatch an action to the store
    //       dispatch(setTodoList(response.data))

    //     } catch (error) {
    //       dispatch(setisTodoError(true))
          
    //     }
    //     finally{
    //       dispatch(setisTodoLoading(false))
    //     }
    
    //   }
    //   getTodoData()

    // }

 
//[] means run only once like init state..if we give any value like [id] it will run every time when id changes
    if(todoState.isError){
      return <p>Something went wrong</p>
    }

    if(todoState.isLoading){
      return <p>Loading...</p>
    }
  return (
    <>
    <div>
      {
        todoState.todoList.map((todo)=>{
        return <TodoItemCard key={todo.id} title={todo.title} completed={todo.completed}/>
      })
    }
    </div>
    </>
  )


}

export default Todo
