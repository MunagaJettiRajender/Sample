import React from 'react';
import { Grid,Paper, Avatar, TextField,Form, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

function registration(props) {
    const useStyles = makeStyles(theme => ({
        txtStyles: {
            width: '90%',
               marginLeft: 'auto',
               marginRight: 'auto',
               marginBottom: 10,
               marginTop: 0,
                fontWeight: 500,
        },
   }))
    const btnStyle = { marginTop: 10 }
    const phoneRegExp=/^[2-9]{2}[0-9]{8}/
    const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    
    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }
    const paperStyle={padding :20,height:'90vh',width:200, margin:"20px auto"}
    const classes = useStyles();
    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>

            <Grid align='center'>
                     <h3>Register </h3>
                </Grid>
                <TextField label='Name' placeholder='Enter Name' variant="outlined" className ={classes.txtStyles} />
                <TextField label='Email' placeholder='Enter Email'  variant="outlined" className ={classes.txtStyles}/>
                <TextField label='Password' placeholder='Enter Password' variant="outlined" className ={classes.txtStyles}/>
                <TextField label='Confirm Password' placeholder='Confirm password' type='password' variant="outlined"  className ={classes.txtStyles}/>
               
                <Button type='submit' color='primary' variant="contained" fullWidth className ={classes.txtStyles} fullWidth>Register</Button>
              
            </Paper>
        </Grid>
    )
}

export default registration;