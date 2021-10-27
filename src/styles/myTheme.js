import React, { useState } from "react";
import { createTheme ,ThemeProvider } from '@mui/material/styles';

// import { ThemeProvider } from '@material-ui/core/styles';

export const MyContextToggle = React.createContext()

 const lightMode=createTheme({
    palette:{
        mode: "light",
        secondary:{
            main:"#1976d2"
        }        
    },
    typography:{
        fontFamily:"Poppins",
        body2: {
            fontWeight: 200,
          }        
    },  
})
 const darkMode=createTheme({
    palette:{
        mode:"dark",
        secondary:{
            main:"#121212"
        }   
    }, 
    typography:{
        fontFamily:"Poppins",   
        body2: {
            fontWeight: 200, 
          }      
    },
})

function MyTheme({children}){
    const [isDark,setIsDark] = useState(false)
    
    function toggleContext(){
        setIsDark(dark=>!dark)
        console.log(isDark)
    }
    const modeContext ={
        toggleContext,
        isDark
    }
    return(
        <ThemeProvider theme={isDark ? darkMode : lightMode}>
             <MyContextToggle.Provider value={modeContext}>
             
                    {children}
             
            </MyContextToggle.Provider>
        </ThemeProvider>
    )
}
export default MyTheme



