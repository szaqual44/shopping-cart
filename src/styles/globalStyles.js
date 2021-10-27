import {makeStyles} from '@mui/styles'


const useGlobalStyles = makeStyles((theme) => ({
    container:{
     padding:theme.spacing(2),
     backgroundColor:"lightgrey",
     width:"100%",
     minHeight:"calc(100vh - 64px)",
     marginLeft:({windowWidth})=>windowWidth> 900 ? 160 : 56,  
     display:"flex",
     justifyContent:"center"
    },    
    paper:{
        padding:theme.spacing(2),
        minHeight:"400px", 
        maxWidth:800  
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
    textCenter:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    }
   }));
 
   export default useGlobalStyles
