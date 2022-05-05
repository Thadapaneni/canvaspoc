import { GET_DATA_SUCCESS } from "./actionType";
import axios from 'axios'

export const getDataSuccess = (machines)=>{
    return{
        type:GET_DATA_SUCCESS,
        payload:machines
    }
}
export const getData = () =>{
    return(dispatch) =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            
            dispatch(getDataSuccess(res.json()))
            console.log('data is',res)
        })
    }
}