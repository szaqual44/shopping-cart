import React from 'react'
import { makeStyles } from '@mui/styles';
import {  Paper, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles=makeStyles((theme)=>({
    itemsContainer:{
        display:'flex',
        width:"100%",
        padding:theme.spacing(3),   
    },  
    img:{
        width:"160px",  
        height:"180px",
        alignSelf:"center",   
        padding:theme.spacing(1),       
    },
    itemTextField:{        
        display:"flex",
        flexDirection:"column",      
        justifyContent:"space-between"  ,
        marginLeft:theme.spacing(2) 
        
    },
    priceBox:{       
        display:"flex",       
        justifyContent:"end",
        alignItems:"center",        
    },
    addIcon:{
        '&:hover': {
            cursor:"pointer",
            color:"grey",
            transform:"scale(1.2)"
        },
    }
 
}))

export default function Item({item,handleAddToBasket}) {
    const classes=useStyles()   
    return (
        <>               
            <Paper className={classes.itemsContainer}>               
                    <img className={classes.img} src={item.image} alt={item.title}/>
                    <div className={classes.itemTextField}>
                         <Typography variant="h6" sx={{mb:3}}>
                             {item.title}
                        </Typography>
                         <Typography variant="body2"  sx={{mb:3}}>
                            {item.description}                               
                        </Typography>    
                        <div className={classes.priceBox}>
                            <Typography sx={{mr:3}}>Price:</Typography>
                            <Typography sx={{mr:3}}> {item.price} $</Typography>             
                            <ShoppingCartIcon 
                                onClick={()=>(handleAddToBasket(item.id))}
                                className={classes.addIcon}
                                /> 
                        </div>               
                    </div>
            </Paper>       
        </>
    )
}








