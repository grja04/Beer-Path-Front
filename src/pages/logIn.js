import React,{useState} from "react"
import { 
    Avatar, 
    FormControlLabel, 
    Grid, 
    Paper, 
    TextField, 
    Checkbox, 
    Button, 
    Typography, 
    Link 
} from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';

const LogIn = () => {
    const [logInData, setlogInData] = useState({});
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: "20px auto", backgroundColor: '#FFBF00' }
    const avatarStyle = { backgroundColor: '#263238' }

    const getLogInData = event=>{
        let property = event.target.name
        let value = event.target.value
        setlogInData({...logInData,[property]:value})
    }
    const saveLogInData = ()=>{
        fetch('https://beerpath.herokuapp.com/auth/login/', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(logInData),
            })
            .then(response => response.json())
            .then(logInData => {
            console.log('Success:', logInData);
            })
            .catch((error) => {
            console.error('Error:', error);
});
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                name="userName"
                onChange={getLogInData}
                label='Username' 
                placeholder='Enter username' 
                fullWidth 
                required 
                />
                <TextField 
                name="password"
                onChange={getLogInData}
                label='Password' 
                placeholder='Enter passwowrd' 
                type='password' 
                fullWidth 
                required 
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedF}
                            // onChange={handleChange}
                            name="checkedF"name=""

                            indeterminate
                        />
                    }
                    label="Remember Me"
                />
                <Button 
                onClick={saveLogInData}
                type='submit' color='primary' fullWidth variant="contained" style={avatarStyle}>Sign In</Button>
                <Typography fullWidth> Do you have an account?
                
                <Link href="/signUp" /*onClick={preventDefault}*/>
                 Sign up!
              </Link>
              </Typography>
              <Typography> 
              <Link href="#" /*onClick={preventDefault}*/>
              Forgot password?
            </Link>
            </Typography>
            </Paper>
        </Grid>
    )
}
export default LogIn; 