import React from 'react'
import Item from './Item';
import useGlobalStyles from '../../styles/globalStyles';
import useWindowSize from '../../auxiliary/useWindowSize';
//MATERIAL UI 

import { Grid, } from '@mui/material'
// import {makeStyles} from '@mui/styles'
// const useStyles = makeStyles((theme) => ({  
//   }));


export default function Shop({data, handleAddToBasket}) {

    //const classes=useStyles();
    const size = useWindowSize();
    let windowWidth = size.width
    const globalClasses=useGlobalStyles({windowWidth});
    return (
        <>
        <div className={globalClasses.container}>
        
          <Grid 
          container
          spacing={5}  
          >          
            {data.map((item)=>(
              <Grid item              
                xs={12} 
                md={6} 
                xl={4}
              >
                  <Item item={item} key={item.id} handleAddToBasket={handleAddToBasket} />
              </Grid>          
            ))}      
          </Grid>
        </div>

        </>
    )
}
