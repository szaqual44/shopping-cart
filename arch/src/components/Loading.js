
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    position:"relative",
    left:0,
    right:0,
    margin:"auto",
    marginTop:theme.spacing(3)
},
  }));
export default function Loading() {
    const classes=useStyles();
  return (
    <div className={classes.container} >
        <CircularProgress sx={{mb:5}}/>
        <Typography variant="h4"> Loading... </Typography>
    </div>
  );
}
