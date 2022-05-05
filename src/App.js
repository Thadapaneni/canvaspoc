
import React, { useEffect } from 'react'

import "./App.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@material-ui/core';
import ParaElement from './components/ParagraphElement'
import { useSelect } from '@mui/base';
import { Edit } from '@mui/icons-material';
import { getPosts } from './redux/rootReducer';

import { useSelector,useDispatch } from 'react-redux';
import NavBar from './components/NavBar';

function App(){
  const {posts }= useSelector((state)=>state.posts)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPosts())
    console.log(posts)

  },[])
  return(
    <div>
   <NavBar />
   
     <Grid container spacing={3}>
  <Grid item xs>
    
  <Typography> LEFT</Typography>
   

  </Grid>
  <Grid item xs={6}>
<ParaElement />
  </Grid>
  <Grid item xs>
    <Typography>SETTINGS</Typography>
    <Typography>Data From Redux Store</Typography>
    <Typography>{posts.map((item)=>{
      return(
        <li>
          {item.name}
        </li>
      )
    })}</Typography>
  </Grid>
</Grid>

    </div>
  )
}
export default App