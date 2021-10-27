import React, {useContext, useState} from 'react'
import { MyContextToggle } from '../styles/myTheme'
import { Link } from 'react-router-dom';
//MATERIAL UI 
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from '@mui/styles'
import {AppBar, Button, Toolbar, Typography,InputBase} from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Cancel } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';

const useStyles = makeStyles((theme) => ({
    titleLg: {
      display:"flex",
      [theme.breakpoints.down("md")]: {
        display:"none",
      },
    },
    titleSm: {
      display:"none",
      [theme.breakpoints.down("md")]: {
        display:"flex",        
      },
    },
    toolbar:{
        display:"flex",
        justifyContent:"space-between",
    },
    searchBox:{
        display:"flex",        
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"rgb(255, 255, 255,0.2)",
        borderRadius:theme.shape.borderRadius,
        width:"40%",
        maxHeight:34,
        [theme.breakpoints.down("sm")]: {
            display: (props) =>(props.open ? "flex" :"none"),
          },
    },
    inputSearch:{
        marginLeft:theme.spacing(2)
    },
    inputContainer:{
        display:"flex",
        alignItems:"center"
    },
    logoIcon:{
        marginRight:theme.spacing(2)
    },
    logoContainer:{
        display:"flex",
        alignItems:"center"
    },
    search:{
        display:"none",
        [theme.breakpoints.down("sm")]: {
            display:"flex",
          },
    },
    buttonWrapper:{
        display:"flex",
        alignItems:"center"
    },
    cancel:{
        display:"none",
        [theme.breakpoints.down("sm")]: {
            display:"flex",
          },
    },
    button:{
        color:"white"
    }
  }));


export default function Navbar({search, setSearch}) {
    const [open,setOpen] = useState(false)
 
    const classes=useStyles({open});
    return (
        <>
        <AppBar position="sticky" color="primary">
            <Toolbar className={classes.toolbar}>
                <div className={classes.logoContainer}>
                    <StorefrontIcon className={classes.logoIcon}/>
                    <Typography className={classes.titleLg} variant="h4" >                    
                        Welcome to my store
                    </Typography>
                    <Typography className={classes.titleSm} variant="h5" >
                        STORE
                    </Typography>
                </div>
                <div className={classes.searchBox}>                   
                    <div className={classes.inputContainer}>
                        <SearchIcon />
                        <InputBase  
                            placeholder="Search..." 
                            className={classes.inputSearch}
                            value={search}
                            onChange={(e)=>{
                                setSearch(e.target.value)
                                // console.log(search)
                            }}
                            
                            />
                    </div>
                    <div className={classes.cancel}>
                        <Cancel  onClick={()=>setOpen(false)}/>
                    </div>
                </div>
                <div className={classes.buttonWrapper}>
                    <div className={classes.search}>
                        <SearchIcon onClick={()=>setOpen(true)}/>
                    </div>
                    <Link to="/login" className={classes.button}>
                       <PersonIcon/>
                    </Link>
                </div>                
            </Toolbar>
        </AppBar>
   
        </>
    )
}
