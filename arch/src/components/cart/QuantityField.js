import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
   
  }));


export default function QuantityField({item, setProducts }) {
    const classes=useStyles()
 
    return (
        <div className={classes.container}>
            {/* <ArrowBackIosIcon sx={{ fontSize: 20 }} /> */}
            {item.quantity}
            {/* <ArrowForwardIosIcon 
                sx={{ fontSize: 20 , ml:1}} 
                /> */}
        </div>
    )
}
