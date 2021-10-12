import React, { useState, useContext} from 'react'
import { SideMenu } from '../customTheme/myTheme'
//MATERIAL UI 
import {makeStyles} from '@mui/styles'
import { List, ListItem, Typography } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    list:{
      width:"100%",
        height:"100vh",  
    },
    aside:{
        position:"fixed",
        backgroundColor:theme.palette.secondary.main,
        width:({sideMenuWidth})=>sideMenuWidth,
       
       
    },
    textBox:{
        color:"#fff",      
    },
    text:{
        [theme.breakpoints.down("md")]: {
            display:"none",
          },
    }
  }));

export default function LeftMenu() {
    const sideMenuWidth=useContext(SideMenu)
    const classes=useStyles({sideMenuWidth});
    
    return (  
            <aside className={classes.aside}>     
            <List className={classes.list} color="secondary">
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

