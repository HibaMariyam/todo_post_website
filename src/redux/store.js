import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import postSlice from "./slices/postSlice";

const store=configureStore({
    //store is a centralized place to manage the state of your entire application.
    reducer:{
        todo:todoSlice,
        post:postSlice
        //todo: todoSlice.reducer: Adds the todo slice to the store, managed by the reducer from todoSlice.
    },
    devTools:true
})

export default store