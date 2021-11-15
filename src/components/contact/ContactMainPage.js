
import { Form, Field } from 'react-final-form'
import useStyles from './styles'
import useGlobalStyles from '../../styles/globalStyles'
import useWindowSize from '../../auxiliary/useWindowSize'
//MATERIAL UI 


import {makeStyles} from '@mui/styles'
import {Paper, Typography, Button } from '@mui/material'


  function handleContactSubmit(values){
        console.log(values)
  }
  function required(values){
    const errors ={}
    let mailFormat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name){
        errors.name = "Required"
    }
    if (!values.email){
        errors.email = "Required"
    }
    if (values.email){
        if (values.email.match(mailFormat)){
            console.log("ok")
        }else {
            console.log(values.email)
            errors.email = "Wrong email adress"
        }
    }
    if (!values.text){
        errors.text = "Required"
    }
    return errors
  }


 export default function ContactMainPage() {
    const classes=useStyles();
    const size = useWindowSize();
    let windowWidth = size.width
    const globalClasses=useGlobalStyles({windowWidth});
    return (
        <div className={globalClasses.container}>
            <Paper className={globalClasses.paper}>
                <Typography variant="h3" className={globalClasses.underline} sx={{mb:8}}> Send us email </Typography>                
                <Form 
                    onSubmit={handleContactSubmit}
                    validate={required}
                >
                    {({handleSubmit, values})=>(
                        <form onSubmit={handleSubmit}>
                            <Field 
                                name='name'
                                placeholder='Type your name'                               
                            >
                                {({input, meta,placeholder})=>(
                                    <div className={` ${meta.active ? classes.active : ''}`}>
                                         <div className={classes.relative}>
                                            {meta.error && meta.touched && <span className={classes.required}>{meta.error}</span>}
                                        </div>
                                        <div className={classes.fieldContainer}>
                                            <label className={classes.label}> Name </label>                                        
                                            <input 
                                                {...input} 
                                                placeholder={placeholder} 
                                                className={meta.error && meta.touched ?classes.input : ''}/>  
                                        </div>                                       
                                    </div>                                    
                                )}                                
                            </Field>

                            <Field 
                                name='email'
                                placeholder='Type your email'                               
                            >
                                {({input, meta,placeholder})=>(
                                    <div className={` ${meta.active ? classes.active : ''}`}>
                                         <div className={classes.relative}>
                                            {meta.error && meta.touched && <span className={classes.required}>{meta.error}</span>}
                                        </div>
                                        <div className={classes.fieldContainer}>
                                            <label className={classes.label}> Email </label>                                        
                                            <input 
                                                {...input} 
                                                placeholder={placeholder} 
                                                className={meta.error && meta.touched ?classes.input : ''}/>  
                                        </div>                                       
                                    </div>                                    
                                )}                               
                            </Field>

                            <Field 
                                name='text'
                                placeholder='Type your massage'
                            >
                                {({input, meta,placeholder})=>(
                                        <div className={` ${meta.active ? classes.active : ''}`}>                                          
                                            <div className={classes.textContainer}>
                                                <label style={{marginBottom:20}}> Massage </label>                                        
                                                <textarea {...input} placeholder={placeholder} className={meta.error && meta.touched ?classes.input : ''}/>
                                            </div>                                   
                                            <div className={classes.relative}>
                                                {meta.error && meta.touched && <span className={classes.required}>{meta.error}</span>}
                                            </div>
                                        </div>                                    
                                    )}        
                      
                            </Field>
                            <Button variant="contained" type="submit" className={classes.button} sx={{mt:4}}>Submit</Button>
                            
                            {/* <pre>{JSON.stringify(values,undefined,2)}</pre> */}
                   
                        </form>
                     
                    )
                    }

                </Form>
            </Paper>   
        </div>
    )
}

