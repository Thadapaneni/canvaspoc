import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './rootReducer'

export default configureStore({
    reducer:{
        posts:PostReducer
    }
})