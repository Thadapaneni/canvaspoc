import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import Notification from './Notification';
const ConfirmDialouge = (props) =>{
    const[notify,setNotify]=useState({
        isOpen:false,
        message:'',
        type:''
    })
    const{ co,setCo,setState}=props
   
    const handleYes = () =>{
        setNotify({
            isOpen:true,
            message:'Element deleted Successfully',
            type:'success'
        })
       
        setCo({
            ...co,
            isOpen:false
        })
        setState([])
    }
    const handleNo = () =>{
        setNotify({
            isOpen:true,
            message:'Unable to delete assessment',
            type:'error'
        })
        setCo({
            ...co,
            isOpen:false
        })
    }
    return(
        <div>
            <Dialog open={co.isOpen}>
            <DialogTitle>
               
            </DialogTitle>
            <DialogContent>
                <Typography variant='h6'>
                    {co.title}
                </Typography>
                <Typography variant='h6'>
                    {/* {co.subTitle} */}
                </Typography>
                    
                    </DialogContent>
                    <DialogActions>
                        <Button  color="secondary" onClick={handleYes}>Yes</Button>
                        <Button   color="primary" onClick={handleNo}>Cancel</Button>

                    </DialogActions>
                    
        </Dialog>
        <Notification  notify={notify}
       setNotify={setNotify}/>
        </div>
       
    )
}
export default ConfirmDialouge