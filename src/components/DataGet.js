import React from 'react';

const Data = ({state}) =>{
    return(
        <div>
{state&& state.map((item,id)=>{
    return(
        <li key={id} >
            {item.name}
            
        {item.email}
            
        {item.address.city}
            
            </li>
    )
})}
        </div>
    )
}
export default Data