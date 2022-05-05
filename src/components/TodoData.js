import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Todo = ({item,setItem}) =>{
    const handleDelete = (id) =>{
        // var newList = item;
        
        // const op =item.splice(id,item.id);
        // setItem(op)
         const op = item.filter((ele)=>{
           return id !== ele.id
           setItem(op)
         })
        
        }
    return(
        <div>
             {item.map((val)=>{
          return(
            <div key={val.id}>
            
             
              {val.msg}
            </div>
          )
        })}

        </div>
    )
}
export default Todo