import useStyles from './styles';
import {  Paper, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function SingleItem({item,handleAddToBasket}) {
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








