import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useFetch(url) {
    const [data,setData]=useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState() 
// fetching data
    const fetchData= async()=>{
        await axios.get(url)
           .then((response)=>{
               setIsLoading(true)               
               setData(response.data)
               setIsLoading(false)        
           })
           .catch(error=>{               
               setError(error)
               console.log(error)
           })                    
   }
    // adding a new key: quantity
    async function addQuantity(){
         await addQuan()
    }
    function addQuan(){
    if (data!==undefined){
        const newArray = [...data]
        newArray.map(item=>item.quantity=0)
        // console.log(data)
        }       
    }


    addQuantity()
    useEffect(()=>{    
        fetchData()    
        },[])
    return [data,isLoading,error]
}
