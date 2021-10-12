
import React, { useState} from 'react'
import { Form, Field } from 'react-final-form'
//MATERIAL UI 


import {makeStyles} from '@mui/styles'
import {Paper, Typography, Button } from '@mui/material'
import { spacing } from '@mui/system';


const useStyles = makeStyles((theme) => ({
    container:{
        position:"relative",
        left:0,
        right:0,
        margin:"auto",
        marginTop:theme.spacing(3),
        width:"40%"
    },
    paper:{
        padding:theme.spacing(3),
        minHeight:"400px",
        backgroundColor:"#222",    
    },
    underline:{
        borderBottom:"2px solid grey",
    },   
    active:{
      backgroundColor:"#e6ebe6"  
    },
    fieldContainer:{
        padding:20,
        display:"flex",
        justifyContent:"space-between",
        position:"relative",
        [theme.breakpoints.down("1000")]: {
            flexDirection:"column",            
          },
    },
    textContainer:{
        padding:20,
        paddingBottom:5,
        display:"flex",
        flexDirection:"column",
    },
    button:{
        width:"100%",
        marginTop:"110px"
    },
    input:{
       border:"1px solid red",
       borderRadius:"3px"
    },

    required:{         
        position:"absolute",
        right:10,
       fontSize:"10px",
       color:"red" 
    },
    label:{
        marginRight:"10px",
        [theme.breakpoints.down("1000")]: {
            marginBottom:"10px"
          },
    }
   
  }));


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
    // if (values.text.length<100){
    //     errors.text = "To short massage"
    // }


    return errors
  }




 export default function Contact() {
    const classes=useStyles();

    return (
        <main className={classes.container}>
            <Paper className={classes.paper}>
                <Typography variant="h3" className={classes.underline} sx={{mb:8}}> Send us email </Typography>                
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
                                         <div>
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
                                         <div>
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
                                            <div>
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
   
        </main>
    )
}



// <Form
//                     onSubmit={handleSubmit}
//                     initialValues={{
//                     ...formData,
//                     }}
//                     render={({ handleSubmit, form, submitting, pristine, values }) => (
//                     <form onSubmit={handleSubmit} className={classes.form}>
//                         <div>
//                         <label>First Name</label>
//                         <Field
//                             name="firstName"
//                             component="input"
//                             type="text"
//                             placeholder="First Name"
//                         />
//                         </div>
//                         </form>
//                     )} />