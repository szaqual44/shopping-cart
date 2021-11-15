import useStyles from './styles'
import useGlobalStyles from '../../styles/globalStyles';
//MATERIAL UI 
import { Typography, Grid } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import QuantityField from './QuantityField';

export default function CartItem({item, handleRemoveItem, handleIncreaseItem , handleDecreaseItem}) {

    const classes=useStyles();
    const classesCommon=useGlobalStyles();
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
                        <QuantityField item={item} handleIncreaseItem={handleIncreaseItem} handleDecreaseItem={handleDecreaseItem}/>
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
