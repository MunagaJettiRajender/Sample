import Head from 'next/head'
import Link from 'next/link'
import { makeStyles, useTheme } from "@material-ui/core/styles"

import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
export default function Home() {
     const useStyles = makeStyles(theme => ({
          txtStyles: {
               width: 'auto',
               marginLeft: 'auto',
               marginRight: 'auto',
               marginBottom: 10,
               marginTop: 0,
               fontWeight: 500,
          },
     }))

  const paperStyle={padding :100,height:'70vh',width:220, margin:"20px auto"}
  
const classes = useStyles();
  return (
    <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                     <h2>Login In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' variant="outlined" className ={classes.txtStyles} />
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined"  className ={classes.txtStyles} />
               
                <Button type='submit' color='primary' variant="contained" className ={classes.txtStyles}  fullWidth>Login</Button>
              
                <Typography >  
                     <Link href="/components/registration" >
                        Click here to register
                </Link>
                </Typography>
            </Paper>
        </Grid>
  )

                  }

