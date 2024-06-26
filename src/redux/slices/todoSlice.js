import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    todoList:[],
    isLoading:false,
    isError:false
}

export const getTodoData=createAsyncThunk("todo/getTodoData",async()=>{
const response=await axios.get("https://jsonplaceholder.mock.beeceptor.com/todos")
return response.data
})

const todoSlice=createSlice(
    {
        name:"todo",
        initialState:initialState,
//reducers: A reducer is a function that takes the current state and an action as arguments and returns the new state.
        reducers:{
            // setTodoList:(state,action)=>{
            // state.todoList=action.payload
            // },
            // // state: The current state of this slice. It allows us to read and modify the state...action: An object that contains information about what needs to change. This object has a payload property that carries the new value for todoList.
            // setisTodoLoading:(state,action)=>{
            //     state.isLoading=action.payload
            //     },
            // // Suppose the current state.isLoading is false.You dispatch an action: setisLoading(true).This action has a payload of true.The setisLoading function updates state.isLoading to true.
            // setisTodoError:(state,action)=>{
            //         state.isError=action.payload
            //         },
            

        },

        //extraReducers used to handle async actions like getTodoData
        extraReducers:(builder)=>{
            builder.addCase(
                getTodoData.fulfilled,(state,action)=>{
                    state.todoList=action.payload
                    state.isLoading=false
                },
                builder.addCase(
                    getTodoData.pending,(state,action)=>{
                        state.isLoading=true
                    }
                ),
                builder.addCase(
                    getTodoData.rejected,(state,action)=>{
                        console.log(action)
                        state.isError=true

                        state.isLoading=false
                    }
                )


            )
    
                }
    }
)

export const {setTodoList,setisTodoLoading,setisTodoError}=todoSlice.actions
export default todoSlice.reducer