import {makeStyles} from '@mui/styles'


const useGlobalStyles = makeStyles((theme) => ({
    container:{
     padding:theme.spacing(2),
     backgroundColor:"lightgrey",
     width:"100%",
     minHeight:"calc(100vh - 64px)",
     marginLeft:({windowWidth})=>windowWidth> 900 ? 160 : 56,  
    },    
    gridContainer:{
        display:"flex",
        alignItems:"center" 
    },
    gridValue:{
        textAlign:"center"
    },
    underline:{
        borderBottom:"2px solid grey",
    }, 
   }));
 
   export default useGlobalStyles
