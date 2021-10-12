import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  {useContext} from 'react'

import useFetch from './auxiliary/useFetch'
import Shop from "./components/shop/Shop";
import LeftMenu from "./components/LeftMenu";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Cart from "./components/cart/Cart";
import Contact from "./components/Contact";
import { SideMenu } from './customTheme/myTheme';

//MATERIA UI
import {makeStyles} from '@mui/styles'
export const storageKey="inCart"

export const leftMenuWidthBig = 200
export const leftMenuWidthSmall = 100

const useStyles = makeStyles((theme) => ({
  container:{
    display:"flex",
    flexDirection:"row"
  },
  placeholder:{   
    marginLeft:({sideMenuWidth})=>sideMenuWidth
  }
}));
function App() {
  const url='https://fakestoreapi.com/products'
  const sideMenuWidth=useContext(SideMenu)
  const [data,isLoading,error]=useFetch(url)

  const classes=useStyles({sideMenuWidth});

  

    function handleAddToBasket(id){  
      let storage = JSON.parse(localStorage.getItem(storageKey))
      // console.log('downloaded from local storage storage',storage)
      let addedToCart = data.find(item=>item.id==id) 
      // console.log('added product',addedToCart)
      if (storage===null){
        storage=[] 
        // console.log("storage is null")
        addedToCart.quantity=1
        storage.push(addedToCart);  
      } 
      else{     
        let inStorage = storage.find(item=>item.id==id) 
       if (inStorage!=undefined){
         storage.map(item=> {
           if(item.id==id) {
             item.quantity++
        }})    
       } else{
        addedToCart.quantity=1
        storage.push(addedToCart);         
       }       
      }            
      localStorage.setItem(storageKey,JSON.stringify(storage))  
    }

   console.log(sideMenuWidth)
  return (  
    <>   

    <Router>
      <Navbar/>         
      <LeftMenu />       
      <div className={classes.container}>
          <div className={classes.placeholder}/>
          { !isLoading ?               
                  <Switch>
                    <Route exact path="/">
                      <Shop data={data} handleAddToBasket={handleAddToBasket} />
                    </Route>
                    <Route exact path="/cart">
                      <Cart />
                    </Route>
                    <Route exact path="/contact">
                      <Contact/>
                    </Route>
                  </Switch>               
              : <Loading/>}
      </div>
    </Router>
 
    </>
  );
}

export default App;
