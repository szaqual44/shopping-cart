import React from 'react'
import Item from './Item';
//MATERIAL UI 

import {makeStyles} from '@mui/styles'
import { Grid, } from '@mui/material'

const useStyles = makeStyles((theme) => ({
   container:{
    margin:0,
    padding:theme.spacing(2),
    backgroundColor:"lightgrey"
   }   
  }));


export default function Shop({data, handleAddToBasket, handleRemoveItem}) {

    const classes=useStyles();
    return (
        <>
        <div className={classes.container}>
          <Grid 
          container
          spacing={5}  
          >
            {data.map((item)=>(
              <Grid item              
                xs={12} 
                md={6} 
                xl={4}
              >
                  <Item item={item} key={item.id} handleAddToBasket={handleAddToBasket} />
              </Grid>          
            ))}      
        </Grid>
        </div>

        </>
    )
}
