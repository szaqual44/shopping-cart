import {makeStyles} from '@mui/styles'

const useGlobalStyles = makeStyles((theme) => ({
    container:{
     padding:theme.spacing(2),
     backgroundColor:"lightgrey",
     width:"100%"
    },
    
    gridContainer:{
        display:"flex",
        alignItems:"center" 
    },

    gridValue:{
        textAlign:"center"
    },
   }));
 
   export default useGlobalStyles