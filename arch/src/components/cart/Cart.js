
import React, { useState, useEffect} from 'react'
import { storageKey } from '../../App';
import CartItem from './CartItem';
import useStylesCommon from './style'
//MATERIAL UI 
import {makeStyles, } from '@mui/styles'
import {Container, Grid, Typography,Paper } from '@mui/material'
import Total from './Total';


const useStyles = makeStyles((theme) => ({
    container:{
        marginTop:theme.spacing(1), 
    },   
    underline:{
        borderBottom:"2px solid grey",
    },
    cartItem:{
        marginBottom:"20px"
    },
    paper:{
        padding:theme.spacing(2),  
        minHeight:"400px",   
        [theme.breakpoints.down('sm')]:{
            width:"100%"
        },  
    }
  }));

  const tableDescription = {
    id:null,
      title:"Product:",
      image:"",
      quantity:"Quantity",
      price:"Price",      
  }

 
export default function Cart({handleRemoveItem}) {    
    const classes=useStyles();
    const classesCommon=useStylesCommon();
    const [products, setProducts] = useState()
    const [productsLoaded, setProductsLoaded] = useState(false)
    const [totalPrice, setTotalPrice] = useState()
    useEffect(() => {       
        setProducts(getCartItems(storageKey))
        setProductsLoaded(true)           
    }, [])
    useEffect(() => {
        calculateTotalPrice()
    }, [products])

    function getCartItems(storageKey){
        let data = JSON.parse(localStorage.getItem(storageKey))
        if (data===null) data=[] 
        // console.log(data)
        return data        
   }
    function handleRemoveItem(id){
        console.log(id)
        let storage = JSON.parse(localStorage.getItem(storageKey))
        console.log(storage)
        storage =storage.filter(item=>item.id!==id)
        setProducts(storage)
      localStorage.setItem(storageKey,JSON.stringify(storage)) 
    }
    function calculateTotalPrice(){
        let sum=0   
        if (products!=undefined){
            for (let i=1;i<products.length;i++){
                sum+=products[i].price*products[i].quantity
            }   
            sum=Math.round(sum * 100) / 100
            setTotalPrice(sum)
        }        
    }
  
    
    return (
        <Container className={classes.container}>
        <Grid container spacing={3} className={classes.grid}>
            <Grid item md={8} sm={12} xs={12}>
                <Paper className={classes.paper}>
                    {/* TITLE */}
                    <Typography variant="h3" className={classes.underline} sx={{mb:8}}> In Your Cart: </Typography>
                    {/* SUBTITLE */}
                    <Grid container className={classesCommon.gridContainer}>
                        <Grid item xs={2} >                                           
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" fontWeight={700}>
                               Product
                            </Typography>
                        </Grid>
                        <Grid item xs={2} >
                            <Typography variant="body2" fontWeight={700} className={classesCommon.gridValue}>    
                                Quantity
                            </Typography>
                        </Grid>
                        <Grid item xs={2} >
                            <Typography variant="body2" fontWeight={700} className={classesCommon.gridValue}>    
                               Price
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.gridValue}>                         
                        </Grid>  
                    </Grid>
                    {/* LIST OF ITEMS */}
                    {productsLoaded  ? products.map((item)=>(
                    <CartItem 
                        key={item.id} 
                        item={item} 
                        className={classes.cartItem} 
                        handleRemoveItem={handleRemoveItem}     
                        setProducts={setProducts}                   
                       />                 
                    )) : null}
                </Paper>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                <Total totalPrice={totalPrice}/>
            </Grid>

        </Grid>
       
   
        </Container>
    )
}




