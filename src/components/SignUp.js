
import React, {useContext,useState} from 'react'
import { AuthContext } from '../auxiliary/AuthContext'
import useGlobalStyles from '../styles/globalStyles'
import useWindowSize from '../auxiliary/useWindowSize'
import { Link, useHistory } from 'react-router-dom';
//MATERIAL UI 

import { Typography, TextField, Button, Paper, Alert } from '@mui/material'

export default function SignUp() {    
    const [error, setError] = useState('')
    const [loading, setLoading] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [alert,setAlert] = useState(false)
    // const classes=useStyles();
    const size = useWindowSize();
    let windowWidth = size.width
    const globalClasses=useGlobalStyles({windowWidth});    
    const {currentUser,signup} = useContext(AuthContext)
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
        if (password !== passwordConfirmation){
            setError("Password do not match")
            setTimeout(() => {
                setError('')
            }, 3000);
            return 
        }      
        try {            
            setAlert(true)            
            setError('')
            setLoading(true)
            await signup(email,password)
            history.push('/')
        } catch {
            setError('Failed to sign in')
        }
        setEmail('')
        setPassword('')
        setPasswordConfirmation('')
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
                            Register 
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
                            <TextField 
                                type="password"
                                label="Confirm Password"
                                value={passwordConfirmation}
                                onChange={e => setPasswordConfirmation(e.target.value)}
                                sx={{mt:3}}
                            />                        
                            <Button disabled={loading} type='submit' variant="contained" sx={{mt:3}}>Sign Up </Button>                            
                        </form>
                        <div className={globalClasses.textCenter}>
                            <Typography sx={{mt:7}}>
                                Do you have already an account?                           
                            </Typography>                          
                            <Link to="/login" sx={{mt:3}} className={globalClasses.link}> Log In </Link>
                        </div>
                        { alert ? <Alert severity="success" sx={{mt:3}}>Your account has been created!</Alert> : null}
                        { error ? <Alert severity="error" sx={{mt:3}}>{error}</Alert> : null}                  
                    </Paper>
        </div>
    )
}

