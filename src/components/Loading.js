
import React from 'react';
import useGlobalStyles from '../styles/globalStyles';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  center:{
    position:"relative",
    left:0,
    right:0,
    margin:"auto",
    marginTop:theme.spacing(3),
    textAlign:"center"
},
  }));
export default function Loading({error}) {
    const classes=useStyles();
    const globalClasses=useGlobalStyles();
  return (
    <div className={globalClasses.container} className={classes.center}>
        <CircularProgress sx={{mb:5}}/>
        {error 
        ? <Typography variant="h4"> 
           {error.message}
          </Typography>
        :<Typography variant="h4"> 
          Loading... 
        </Typography>}
          
    </div>
  );
}
