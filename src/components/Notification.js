
import React from 'react'
import { Snackbar, Typography } from '@material-ui/core'
import Alert from '@mui/material/Alert';
// or
//import { Alert } from '@mui/material';

const Notification = (props) =>{
    const{notify,setNotify}=props
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setNotify({
            isOpen:false
        });
    };
   
    return(
        <div>
           
            <Snackbar    
            open={notify.isOpen}
            autoHideDuration={2000}
            anchorOrigin={{vertical:'top',horizontal:'right'}}
            onClose={handleClose}
            >
                <Alert  severity={notify.type}>
                    {notify.message}

                </Alert>
            </Snackbar>
        </div>
    )
}
export default Notification