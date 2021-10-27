import React, { useState, useContext} from 'react'
import { MyContextToggle } from '../styles/myTheme'
//MATERIAL UI 
import {makeStyles} from '@mui/styles'
import { Button, List, ListItem, Typography } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

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

export default function LeftMenu() {
    const {toggleContext, isDark} = useContext(MyContextToggle)
    const classes=useStyles();
    
    return (  
            <aside className={classes.aside}>                 
                <List className={classes.list} color="secondary">
                    <div>
                        {menu.map((item)=>(
                            <Link to={item.path} style={{ textDecoration:'none'}} >
                                <ListItem className={classes.textBox}>
                                    {item.icon} 
                                    <Typography variant="h6" className={classes.text} style={{marginLeft:"5px"}}>
                                        {item.text}
                                    </Typography>
                                </ListItem>
                            </Link>
                        ))}
                    </div>
                    <Button                 
                        onClick={()=>toggleContext()}
                        variant="contained"   
                        className={classes.button}  
                        color="secondary"                 
                    >
                        {isDark ?<WbSunnyIcon/>:<DarkModeIcon/>}
                          
                    </Button>                                 
                </List>                 
            </aside>   
    )
}

const menu=[
    {
        text:"Shop",
        path:"/",
        icon: <StorefrontIcon/>
    },
    {
        text:"Cart",
        path:"/cart",
        icon: <ShoppingCartIcon />
    },
    {
        text:"Contact",
        path:"/contact",
        icon: <MailOutlineIcon />
    },    
]

