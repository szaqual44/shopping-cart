import React, { useState, useEffect} from 'react'
import { storageKey } from '../../App';
import CartItem from './CartItem';
import useGlobalStyles from '../../styles/globalStyles';
import useWindowSize from '../../auxiliary/useWindowSize';
import useStyles from './styles'
//MATERIAL UI 
import { Grid, Typography,Paper } from '@mui/material'
import TotalPrice from './TotalPrice';


export default function Cart({handleRemoveItem}) {    
    const classes=useStyles();
    const size = useWindowSize();
    let windowWidth = size.width
    const globalClasses=useGlobalStyles({windowWidth});
    const [products, setProducts] = useState()    //list of products in cart
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
        if (products!==undefined){
            for (let i=0;i<products.length;i++){
                sum+=products[i].price*products[i].quantity
            }   
            sum=Math.round(sum * 100) / 100
            setTotalPrice(sum)
        }        
    }
    function handleIncreaseItem(id){
        let newArray = [...products]
        newArray.forEach(item=>{
            if (item.id === id) item.quantity++
            calculateTotalPrice()
        })    
        setProducts(newArray)
      
    }
    function handleDecreaseItem(id){
        let newArray = [...products]
        newArray.forEach(item=>{
            if (item.id === id){               
               if (item.quantity>1) item.quantity--
               calculateTotalPrice()
            } 
        })    
        setProducts(newArray)
        
    }
  
    
    return (
        <div className={globalClasses.container}>
        <Grid container spacing={3} className={classes.grid}>
            <Grid item md={8} sm={12} xs={12}>
                <Paper className={classes.paper}>
                    {/* TITLE */}
                    <Typography variant="h3" className={globalClasses.underline} sx={{mb:8}}> In Your Cart: </Typography>
                    {/* SUBTITLE */}
                    <Grid container className={globalClasses.gridContainer}>
                        <Grid item xs={2} >                                           
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" fontWeight={700}>
                               Product
                            </Typography>
                        </Grid>
                        <Grid item xs={2} >
                            <Typography variant="body2" fontWeight={700} className={globalClasses.gridValue}>    
                                Quantity
                            </Typography>
                        </Grid>
                        <Grid item xs={2} >
                            <Typography variant="body2" fontWeight={700} className={globalClasses.gridValue}>    
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
                        handleIncreaseItem={handleIncreaseItem} 
                        handleDecreaseItem={handleDecreaseItem}               
                       />                 
                    )) : null}
                </Paper>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                <TotalPrice totalPrice={totalPrice}/>
            </Grid>

        </Grid>
       
   
        </div>
    )
}




