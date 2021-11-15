

//MATERIAL UI 
import {makeStyles} from '@mui/styles'
import { Button, Paper, Typography, } from '@mui/material'

const useStyles = makeStyles((theme) => ({
    underline:{
        borderBottom:"2px solid grey",
    },
    paper:{
        padding:theme.spacing(2),        
    },
    price:{
        display:"flex",
        justifyContent:"end"
    },
    buttonContainer:{        
        display:"flex",
        justifyContent:"end",      
        marginTop:20 
    },       
  }));


export default function TotalPrice({totalPrice}) {

    const classes=useStyles();
    return (
        <Paper className={classes.paper} >
            <Typography variant="h3" className={classes.underline}>
                Total:
            </Typography>
            <Typography variant="h4" sx={{mt:4}} className={classes.price}>
                ${totalPrice}
            </Typography>
            <div className={classes.buttonContainer}>   
                <Button variant="contained"> BUY </Button>
            </div>   
        </Paper>
    )
}
