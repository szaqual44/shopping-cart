import React, { useContext} from 'react'
import useStyles from './styles'
import { MyContextToggle } from '../../styles/myTheme'
import useGlobalStyles from '../../styles/globalStyles'
//MATERIAL UI 
import {makeStyles} from '@mui/styles'
import { Button, List, ListItem, Typography } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function LeftMenu() {
    const {toggleContext, isDark} = useContext(MyContextToggle)
    const classes=useStyles();
    const globalClasses=useGlobalStyles();
    
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

