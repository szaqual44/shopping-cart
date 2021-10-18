import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  {useContext, useState,useEffect} from 'react'

import useFetch from './auxiliary/useFetch'
import Shop from "./components/shop/Shop";
import LeftMenu from "./components/LeftMenu";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Cart from "./components/cart/Cart";
import Contact from "./components/Contact";


//MATERIA UI
import {makeStyles} from '@mui/styles'
export const storageKey="inCart"

export const leftMenuWidthBig = 200
export const leftMenuWidthSmall = 100

const useStyles = makeStyles((theme) => ({
  container:{
    display:"flex",
    flexDirection:"row",
  },
  placeholder:{   
    width:"200px",
    height:"100vh"
  }
}));
function App() {
  const url='https://fakestoreapi.com/products'

  const [data,isLoading,error]=useFetch(url)    //fetched from api
  const [filteredData,setFilteredData] = useState(data)
  const [search, setSearch] = useState("")
  const classes=useStyles(); 

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
    function filterData(data){
      const newData = data.filter((item)=> (item.title).includes(search))  
      return newData   

    }

    const filterDataAsync = async (data) => {
      await filterData(data)
        .then((res)=> setFilteredData(res))
        .catch(error=> console.log(error))
    }

    useEffect(() => {
      filterDataAsync(data)
    }, [search])

    // function filterProducts(data){
    //   const newData = data
    //   if (newData!=undefined){          
    //       // newData = data.filter((item)=> (item.title).includes(search))      
    //   }else newData = [0]
    //   setFilteredData(newData)
    //   console.log(filteredData)
    // }
    // useEffect(() => {
    //   filterProducts(data)
    // }, [search])
 
  return (  
    <>   

    <Router>
      <Navbar search={search} setSearch={setSearch}/>         
           
      <div className={classes.container}>
        <LeftMenu /> 
          {/* <div className={classes.placeholder}/> */}
          { !isLoading ?               
                  <Switch>
                    <Route exact path="/">
                      <Shop data={filteredData} handleAddToBasket={handleAddToBasket} />
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
