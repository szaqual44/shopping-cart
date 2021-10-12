
import React, { useState} from 'react'

//MATERIAL UI 


import {makeStyles} from '@mui/styles'
import { Paper, Typography, Grid } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex"
    },
    gridContainer:{
        display:"flex",
        alignItems:"center"
   
    },
    img:{
        width:"80px",  
        height:"80px", 
        padding:theme.spacing(1),       
    },
    detailsContainer:{
        display:"flex",
        flexDirection:"row"
    },
    gridValue:{
        textAlign:"center"
    },
    cancelIcon:{
        cursor:"pointer"
    },
    
  }));

// item.id = null for styling title of the table 

export default function CartItem({item,handleRemoveItem}) {

    const classes=useStyles();
    return (
        <>
          
            <Grid container className={classes.gridContainer}>
                <Grid item xs={2} >
                    {item.id!= null ? <img className={classes.img} src={item.image} alt={item.title}/> :null }                    
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body2" 
                         fontWeight={item.id==null ? 700 : 300}>
                            {item.title}
                    </Typography>
                </Grid>
                <Grid item xs={2} >
                    <Typography variant="body2" fontWeight={item.id==null ? 700 : 300} className={classes.gridValue}>    
                        {item.quantity}
                    </Typography>
                </Grid>
                <Grid item xs={2} >
                    <Typography variant="body2" fontWeight={item.id==null ? 700 : 300} className={classes.gridValue}>    
                        {item.price}
                    </Typography>
                </Grid>
                <Grid item xs={2} className={classes.gridValue}>
                    {item.id != null 
                    ? <ClearIcon onClick={()=>handleRemoveItem(item.id)} className={classes.cancelIcon}/> 
                    : <Typography variant="body2" fontWeight={700} >    
                            Remove item
                        </Typography> }
                </Grid>
               
               
            </Grid>

   
        </>
    )
}
