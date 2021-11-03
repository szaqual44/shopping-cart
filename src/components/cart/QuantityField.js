import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    icon:{
        cursor:"pointer"
    }   
  }));
export default function QuantityField({item, handleIncreaseItem, handleDecreaseItem }) {
    const classes=useStyles() 
    function decItem(id){
        handleDecreaseItem(id) 
    }
    function incItem(id){
        handleIncreaseItem(id)            
    }
    return (
        <div className={classes.container}>
            <ArrowBackIosIcon sx={{ fontSize: 20 }} onClick={()=>decItem(item.id)} className={classes.icon}/>
            {item.quantity}
            <ArrowForwardIosIcon 
                sx={{ fontSize: 20 , ml:1}} 
                onClick={()=>incItem(item.id)} 
                className={classes.icon}
                />
        </div>
    )
}
