
import React from 'react'
import useStylesCommon from './style'
//MATERIAL UI 
import {makeStyles} from '@mui/styles'
import { Typography, Grid } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import QuantityField from './QuantityField';


const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex"
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
    cancelIcon:{
        cursor:"pointer"
    },    
  }));



export default function CartItem({item,handleRemoveItem}) {

    const classes=useStyles();
    const classesCommon=useStylesCommon();
    return (
        <>          
            <Grid container className={classesCommon.gridContainer}>
                <Grid item xs={2} >
                    <img className={classes.img} src={item.image} alt={item.title}/>                  
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body2" fontWeight={300}>
                        {item.title}
                    </Typography>
                </Grid>
                <Grid item xs={2} >
                    <Typography variant="body2" fontWeight={300} className={classesCommon.gridValue}>    
                       
                        <QuantityField item={item}/>
                    </Typography>
                </Grid>
                <Grid item xs={2} >
                    <Typography variant="body2" fontWeight={300} className={classesCommon.gridValue}>    
                        {item.price}
                    </Typography>
                </Grid>
                <Grid item xs={2} className={classesCommon.gridValue}>                    
                    <ClearIcon onClick={()=>handleRemoveItem(item.id)} className={classes.cancelIcon}/> 
                </Grid>          
               
            </Grid>

   
        </>
    )
}
