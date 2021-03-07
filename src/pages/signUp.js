import react from "react"
import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';

const Signup = () => {


    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: "30px auto", backgroundColor: '#FFBF00' }
    const avatarStyle = { backgroundColor: '#263238' }
    const buttonStyle = {backgroundColor:'#263238'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required />
                <TextField label='Email' placeholder='Enter email' fullWidth required />
                <TextField label='Password' placeholder='Enter passwowrd' type='password' fullWidth required />
               
                <Button type='submit' color='primary' fullWidth variant="contained" style={buttonStyle}>Sign Up</Button>
                <Typography fullWidth> Already have an account?
                
                <Link href="#" /*onClick={preventDefault}*/>
                 Sign in!
              </Link>
            
            </Typography>
            </Paper>
        </Grid>
    )
}


export default Signup; 