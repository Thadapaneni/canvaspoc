
import React, { useEffect, useState } from 'react'
import '../Styles/ParaStyle.css'
import { Typography } from '@material-ui/core'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ExpandIcon from '@mui/icons-material/Expand';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import Notification from './components/Notification';
import ConfirmDialouge from './ConfirmDialouge';
// import Data from './components/DataGet';
import { style, textAlign } from '@mui/system';
import Data from './DataGet';

import EdField from './Editor';

const ParaElement = () =>{
    const[state,setState]=useState([])
    const url='https://jsonplaceholder.typicode.com/users';

const getData = async () =>{
    const res = await fetch(url);
    const op = await res.json();
    setState(op)
    //console.log(op)

}
useEffect(()=>{
    getData()
},[])
const[co,setCo]= useState({
        isOpen:false,
        title:'',
        subTitle:''
    })

    // 
    const handleSubmit = () =>{
        setCo({
            isOpen:true,
           title:'Are You Sure You Want To Delete ',
           subTitle:'Once Deleted no access after'
        })
        

    }
    const handleExpand = () =>{
        //console.log("qvshgv")
        window.open('https://reactjs.org/')
    }
    return(
        <div className='element'>
            
 
       <div className='enfield'>
       <EdField  setCo={setCo} />
       </div>

       <ArrowBackIosNewIcon onClick={handleExpand} color='secondary' fontSize="large"/>
       < ArrowForwardIosIcon className='arrfow' onClick={handleExpand} color='secondary'  fontSize="large"/>
      

       {/* <Button variant="contained"  >DELETE</Button> */}
       <DeleteForeverIcon  color='string' onClick={handleSubmit} />
       
       <ConfirmDialouge
           co={co}
           setCo={setCo} 
           state={state}
           setState={setState}
           />
          

         <Data  state={state}/>
         
            </div>
      
    )
}
export default ParaElement