
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_DATA_SUCCESS } from "./actionType";


const initialState={
    machines:[],
    posts:"DATA FROM REDUX STORE"
}

export const getPosts = createAsyncThunk("posts/getPosts",async ()=>{
    return fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
})
const postSlice = createSlice(({
    name:'posts',
    initialState:{
        posts:[]
    },
    extraReducers:{
        [getPosts.fulfilled]:(state,action)=>{
            state.posts=action.payload
        }
    }
}))
export default postSlice.reducer
// const rootReducer = (state=initialState,action) =>{
//    switch(action.type){
//        case GET_DATA_SUCCESS:
//            return{
//                ...state,
//                machines:action.payload
//            }
//            default:
//             return state
//    }
   
  
// }
// export default rootReducer