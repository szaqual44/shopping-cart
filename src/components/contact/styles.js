import {makeStyles} from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    active:{
        backgroundColor:"#e6ebe6"  
      },
      fieldContainer:{
          padding:20,
          display:"flex",
          justifyContent:"space-between",
          position:"relative",
          [theme.breakpoints.down("1000")]: {
              flexDirection:"column",            
            },
      },
      textContainer:{
          padding:20,
          paddingBottom:5,
          display:"flex",
          flexDirection:"column",
      },
      button:{
          width:"100%",
          marginTop:"110px"
      },
      input:{
         border:"1px solid red",
         borderRadius:"3px"
      },
      relative:{
          position:'relative'
      },
      required:{         
          position:"absolute",
          right:10,
         fontSize:"10px",
         color:"red" 
      },
      label:{
          marginRight:"10px",
          [theme.breakpoints.down("1000")]: {
              marginBottom:"10px"
            },
      }

   }));
 
   export default useStyles
