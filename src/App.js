import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  {useState,useEffect} from 'react'
import useWindowSize from './auxiliary/useWindowSize';
import useFetch from './auxiliary/useFetch'
import Shop from "./components/shop/Shop";
import LeftMenu from "./components/LeftMenu";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Cart from "./components/cart/Cart";
import Contact from "./components/Contact";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
//MATERIA UI
import {makeStyles} from '@mui/styles'
import AuthProvider from './auxiliary/AuthContext';
export const storageKey="inCart"



const useStyles = makeStyles((theme) => ({
  container:{
    display:"flex",
    flexDirection:"row",
  },
  placeholder:{   
    width:({windowWidth})=>windowWidth> 900 ? 160 : 56,
  }
}));
function App() {
  const url='https://fakestoreapi.com/products'
  //fetched from api
  const [data,isLoading,error]=useFetch(url)    

  const [filteredData,setFilteredData] = useState()
  const [search, setSearch] = useState()
  
  const size = useWindowSize();
  let windowWidth = size.width
  const classes=useStyles({windowWidth}); 

  useEffect(() => {
    filterData()
   }, [search])


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
      let inStorage = storage.find(item=>item.id===id) 
      if (inStorage!==undefined){
        storage.map(item=> {
          if(item.id===id) {
            item.quantity++
      }})    
      } else{
      addedToCart.quantity=1
      storage.push(addedToCart);         
      }       
    }            
    localStorage.setItem(storageKey,JSON.stringify(storage))  
  }

function filterData(){      
    if (data!=undefined && search!=null){
      let newData = [...data]
        newData = data.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()))
        if (newData.length===0) newData=[]
        console.log(newData)       
        setFilteredData(newData) 
      }
    }
 
  return (  
    <>   
    <Router>
      <AuthProvider>
        <Navbar search={search} setSearch={setSearch}/> 
        <div className={classes.container}>
          <LeftMenu />           
            { !isLoading ?                      
                <Switch>
                  <Route exact path="/">
                    <Shop data={(filteredData!=undefined) ? filteredData : data} handleAddToBasket={handleAddToBasket} />                     
                  </Route>
                  <Route  path="/cart">
                    <Cart />
                  </Route>
                  <Route  path="/contact">
                    <Contact/>
                  </Route>
                  <Route  path="/signup">
                    <SignUp/>
                  </Route>
                  <Route  path="/login">
                    <LogIn/>
                  </Route>
                </Switch>                            
            : <Loading error={error}/>}
        </div>
        </AuthProvider>
    </Router> 
    </>
  );
}

export default App;
