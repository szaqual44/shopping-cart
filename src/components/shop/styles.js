import {makeStyles} from '@mui/styles'


const useStyles = makeStyles((theme) => ({
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
    
   }));
 
   export default useStyles
