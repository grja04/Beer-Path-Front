import React,{useState} from "react"
import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';

const Signup = () => {
    const [dataEntry, setDataEntry] = useState({});
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: "30px auto", backgroundColor: '#FFBF00' }
    const avatarStyle = { backgroundColor: '#263238' }
    const buttonStyle = {backgroundColor:'#263238'}
    const getEntryData = event=>{
        let property = event.target.name
        let value = event.target.value
        setDataEntry({...dataEntry, [property]:value})
    }
    const saveDataEntry = ()=>{
        console.log('el boton esta funcionando en singup')
        fetch("https://beerpath.herokuapp.com/auth/signup/",{
            method: "POST",
            body: dataEntry
          })
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar> 
                    <h2>Sign Up</h2>
                </Grid>
                <TextField
                // value={!dataEntry?"":dataEntry.name} 
                name="username" 
                onChange={getEntryData} 
                label='Username' 
                placeholder='Enter username' 
                fullWidth 
                required 
                />
                <TextField
                // value={!dataEntry?"":dataEntry.email} 
                name="email" 
                onChange={getEntryData} 
                label='Email' 
                placeholder='Enter email' 
                fullWidth 
                required 
                />
                <TextField 
                // value={!dataEntry?"":dataEntry.hash}
                name="hash" 
                onChange={getEntryData} 
                label='Password' 
                placeholder='Enter passwowrd' 
                type='password' 
                fullWidth 
                required 
                />
               
                <Button
                type='submit' 
                color='primary' 
                fullWidth 
                variant="contained" 
                style={buttonStyle}
                onClick={saveDataEntry}
                >
                    Sign Up
                </Button>
                <Typography fullWidth> Already have an account?
                
                <Link href="/logIn" /*onClick={preventDefault}*/>
                 Sign in!
                </Link>
            </Typography>
            </Paper>
        </Grid>
    )
}
export default Signup; 