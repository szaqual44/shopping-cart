import {makeStyles} from '@mui/styles'


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
    cartItem:{
        marginBottom:"20px"
    },
    paper:{
        padding:theme.spacing(2),  
        minHeight:"400px",   
        [theme.breakpoints.down('sm')]:{
            width:"100%"
        },  
    },
    
   }));
 
   export default useStyles
