import React,{useState} from "react"
import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      background: '#F7A205',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });


const Signup = () => {
    const [dataEntry, setDataEntry] = useState({});
    const buttonStyle = {backgroundColor:'#263238'}
    const getEntryData = event=>{
        let property = event.target.name
        let value = event.target.value
        setDataEntry({...dataEntry, [property]:value})
    }
    const saveDataEntry = ()=>{
        fetch('https://beerpath.herokuapp.com/auth/signup/', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataEntry),
            })
            .then(response => response.json())
            .then(dataEntry => {
            console.log('Success:', dataEntry);
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    const classes = useStyles();
    return (
        <div>
             <Grid container stlye={{ minHeight: '100vh' }}>
            
                            <Grid item xs={12} sm={6} style={{ backgroundColor: '#F5F5F5' }}>

                             <img src='/craft-beer-manu.svg' style={{ width: '100%', height: '100%',}} alt="brand">
                             </img>
                            </Grid>

                                <Grid container item item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding:10,  backgroundColor: '#F5F5F5'}}>
                                        <div/>
                                        <div style={{display:"flex",flexDirection:"column", maxWidth:500, minWidth:300}}>
                                            <Grid class="fontBeba" container item >
                                                        <TextField
                                                            // value={!dataEntry?"":dataEntry.name} 
                                                            name="userName" 
                                                            className={classes.root}
                                                            onChange={getEntryData} 
                                                            label='Username' 
                                                            placeholder='Enter username' 
                                                            fullWidth 
                                                            required 
                                                            />
                                                        <TextField
                                                            // value={!dataEntry?"":dataEntry.email} 
                                                            name="email" 
                                                            className={classes.root}
                                                            onChange={getEntryData} 
                                                            label='Email' 
                                                            placeholder='Enter email' 
                                                            fullWidth 
                                                            required 
                                                            />
                                                        <TextField 
                                                            // value={!dataEntry?"":dataEntry.hash}
                                                            name="password" 
                                                            onChange={getEntryData} 
                                                            className={classes.root}
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
                                                            LOGIN!
                                                            </Link>
                                                            </Typography>
                                                            <div/>
                                             </Grid>
                                         </div>
                        </Grid>
                </Grid>
        </div>
    )
}
export default Signup; 