import react from "react"
import { Avatar, FormControlLabel, Grid, Paper, TextField, Checkbox, Button, Typography, Link } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';

const signin = () => {


    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: "20px auto", backgroundColor: '#FFBF00' }
    const avatarStyle = { backgroundColor: '#263238' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required />
                <TextField label='Password' placeholder='Enter passwowrd' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedF}
                            // onChange={handleChange}
                            name="checkedF"
                            indeterminate
                        />
                    }
                    label="Remember Me"
                />
                <Button type='submit' color='primary' fullWidth variant="contained" style={avatarStyle}>Sign In</Button>
                <Typography fullWidth> Do you have an account?
                
                <Link href="#" /*onClick={preventDefault}*/>
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
export default signin; 