import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    postList:[],
    isLoading:false,
    isError:false
}

export const getPostData= createAsyncThunk("post/getPostData",async()=>{
    const response=await axios.get("https://json-placeholder.mock.beeceptor.com/posts")
    return response.data
})
const postSlice=createSlice(
    {
        name:"post",
        initialState:initialState,
        reducers:{
            // setPostList:(state,action)=>{
            // state.postList=action.payload
            // },
            // // state: The current state of this slice. It allows us to read and modify the state...action: An object that contains information about what needs to change. This object has a payload property that carries the new value for todoList.
            // setisPostLoading:(state,action)=>{
            //     state.isLoading=action.payload
            //     },
            // // Suppose the current state.isLoading is false.You dispatch an action: setisLoading(true).This action has a payload of true.The setisLoading function updates state.isLoading to true.
            // setisPostError:(state,action)=>{
            //         state.isError=action.payload
            // }

          
            

        },
        extraReducers:(builder)=>{
            builder.addCase(getPostData.fulfilled,(state,action)=>{
                state.postList=action.payload
                state.isLoading=false
            })
            builder.addCase(getPostData.pending,(state,action)=>{
                state.isLoading=true
         
            })
            builder.addCase(getPostData.rejected,(state,action)=>{
                state.isLoading=false,
                state.isError=true
                console.log(action)

            })

        }
    }
)

export const {setPostList,setisPostLoading,setisPostError}=postSlice.actions
export default postSlice.reducer