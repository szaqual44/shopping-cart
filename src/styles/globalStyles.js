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
    },
    itemsColumnCenter:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    paper:{
        minHeight:400,
        padding:theme.spacing(2),       
    },
    formControl:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
    },
    link:{
        textDecoration:"none",
        marginTop:20
    }    
   }));
 
   export default useGlobalStyles
