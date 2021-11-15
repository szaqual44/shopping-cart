import {makeStyles} from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    list:{
        height:"90%", 
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
    },
    aside:{
        position:"fixed",
        backgroundColor:theme.palette.secondary.main,
        display:"flex",
        flexDirection:"column",
        height:"100vh",       
    },
    textBox:{
        color:"#fff",       
    },
    text:{
        [theme.breakpoints.down("md")]: {
            display:"none",
          },
    },
   }));
 
   export default useStyles
