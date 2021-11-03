
import React, {useContext,useState} from 'react'
import { AuthContext } from '../auxiliary/AuthContext'
import useGlobalStyles from '../styles/globalStyles'
import useWindowSize from '../auxiliary/useWindowSize'
import { Link, useHistory } from 'react-router-dom';
//MATERIAL UI 

import { Typography, TextField, Button, Paper, Alert } from '@mui/material'

 export default function LogIn() {    
    const [error, setError] = useState('')
    const [loading, setLoading] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [alert,setAlert] = useState(false)
   
    const size = useWindowSize();
    let windowWidth = size.width
    const globalClasses=useGlobalStyles({windowWidth});    
    const {currentUser, login} = useContext(AuthContext)
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault() 
        if (email === ''){           
            setError("Please, enter your email")
            setTimeout(() => {
                setError('')
            }, 3000);
            return           
        }
        if (password === '' ){           
            setError("Please, enter password")
            setTimeout(() => {
                setError('')
            }, 3000);
            return           
        }      
        try {            
            setAlert(true)            
            setError('')
            setLoading(true)
            await login(email,password)
            history.push("/")
            console.log(currentUser.email)
        } catch {
            setError('Failed to log in')
        }
        
        setEmail('')
        setPassword('')
        setError('')
        setLoading(false)
        setTimeout(() => {
            setAlert(false)
        }, 3000);      
        console.log(currentUser)                
    }

    return (
        <div className={globalClasses.container}>  
                    <Paper className={globalClasses.paper}>
                        <Typography variant="h3" className={globalClasses.underline}>
                            Log In 
                        </Typography>                      
                        <form onSubmit={handleSubmit} className={globalClasses.formControl}>
                            <TextField 
                                type="email"
                                label="Login"                                
                                sx={{mt:6}}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField 
                                type="password"
                                label="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                sx={{mt:3}}
                            />                                                 
                            <Button disabled={loading} type='submit' variant="contained" sx={{mt:3}}>Log In</Button>                            
                        </form>
                        <div className={globalClasses.textCenter}>
                            <Typography sx={{mt:7}}>
                                You do not have any account yet?                          
                            </Typography>                          
                            <Link to="/signup" sx={{mt:3}} className={globalClasses.link}> Register </Link>
                        </div>
                        { alert ? <Alert severity="success" sx={{mt:3}}>You have successfuly logged in!</Alert> : null}
                        { error ? <Alert severity="error" sx={{mt:3}}>{error}</Alert> : null}  
                         {currentUser !== null ? <h1>{currentUser.email}</h1> : null}          
                    </Paper>
        </div>
    )
}

