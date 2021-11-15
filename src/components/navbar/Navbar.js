import React, {useContext, useState} from 'react'
import { Link, useHistory, useLocation  } from 'react-router-dom';
import { AuthContext } from '../../auxiliary/AuthContext'
//MATERIAL UI 
import {makeStyles} from '@mui/styles'
import {AppBar, Toolbar, Typography, InputBase, Button} from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Cancel } from '@mui/icons-material';

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
    },
    loggedContainer:{
        display:"flex", 
    },
    loggedUser:{
        maxWidth:100,
        fontSize:10,
        textAlign:"center"
    }    
  }));


export default function Navbar({search, setSearch}) {
    const [open,setOpen] = useState(false)
    const {currentUser, logout} = useContext(AuthContext)
    const [error, setError] = useState('')

    const classes=useStyles({open});    
    const history = useHistory();
    const location = useLocation()
    
    async function handleLogOut(){
        try {
            setError('')          
            await logout()
            history.push("/")
            
        } catch {
            setError("failed to log out")
        }
    }
    
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
                { location.pathname=='/' 
                    ?   <div className={classes.searchBox}>                   
                            <div className={classes.inputContainer}>
                                <SearchIcon />
                                <InputBase  
                                    placeholder="Search..." 
                                    className={classes.inputSearch}
                                    value={search}
                                    onChange={(e)=>{
                                        setSearch(e.target.value)
                                    }}                            
                                    />
                            </div>
                            <div className={classes.cancel}>
                                <Cancel  onClick={()=>setOpen(false)}/>
                            </div>
                        </div>
                    :   null}
                <div className={classes.buttonWrapper}>
                    <div className={classes.search}>
                        <SearchIcon onClick={()=>setOpen(true)}/>
                    </div>
                    
                    <div className={classes.loggedContainer}>                       
                        <Link to="/login" className={classes.button}>
                            {currentUser==null 
                                ? <Button variant="success">
                                    Login
                                </Button>
                                :null }
                        </Link>
                        <Link to="/signup" className={classes.button}>
                                {currentUser===null 
                                    ? <Button variant="success">
                                        Sign Up
                                    </Button>
                                :null }
                        </Link>
                        {currentUser!=null 
                            ? <Button onClick={handleLogOut} variant="success">                     
                                Logout
                            </Button>
                            : null
                        }
                        {currentUser!=null ? <p className={classes.loggedUser}>{currentUser.email} is logged in</p> : null}                                         
                    </div>
                </div>                     
            </Toolbar>
        </AppBar>  
        </>
    ) 
}
