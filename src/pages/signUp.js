import React,{useState} from "react"
import {Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
      background: '#F7A205',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,


    },
  });


const Signup = () => {
    const history = useHistory()
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
            if (dataEntry.success){
                localStorage.setItem('token', dataEntry.data.token)
                history.push('/profile')
            }else{
                alert('Ya existe una cuenta con esos datos')
            }
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    const classes = useStyles();
    return (
        <div>
             <Grid container style={{ minHeight: '100vh', maxWidth:'100vw' }}>
            
                            <Grid item xs={12} sm={6} style={{backgroundColor:'#F5F5F5'}}>

                             <img src='/craft-beer-manu.svg' style={{ width: '100%', height: '100%',}} alt="brand">
                             </img>
                            </Grid>

                                <Grid container item item xs={12} sm={6} alignItems="center" direction="column" justify="space-evenly" style={{padding:10,  backgroundColor: '#F5F5F5'}}>
                                        <div style={{display:"flex",flexDirection:"column",  maxWidth:400, minWidth:300}}>
                                            <Grid class="fontBeba" container item justify="center">
                                                
                                            <TextField
                                                            // value={!dataEntry?"":dataEntry.name} 
                                                            name="userName" 
                                                            className={classes.root}
                                                            onChange={getEntryData} 
                                                            label='Username' 
                                                            placeholder='Enter username' 
                                                            margin="normal"
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
                                                            margin="normal"
                                                            />
                                                        <TextField 
                                                            // value={!dataEntry?"":dataEntry.hash}
                                                            name="password" 
                                                            onChange={getEntryData} 
                                                            className={classes.root}
                                                            label='Password' 
                                                            placeholder='Enter passwowrd' 
                                                            type='password' 
                                                            margin="normal"
                                                            fullWidth 
                                                            required 
                                                            />
                                                    
                                                        <Button
                                                            type='submit' 
                                                            color='primary' 
                                                            fullWidth 
                                                            variant="contained" 
                                                            margin="normal"
                                                            style={buttonStyle}
                                                            onClick={saveDataEntry}
                                                            >
                                                            Sign Up
                                                        </Button>
                                                            <Typography  margin="normal" fullWidth> Already have an account?
                                                        
                                                            <Link href="/logIn" /*onClick={preventDefault}*/>
                                                            LOGIN!
                                                            </Link>
                                                            </Typography>
                                        
                                             </Grid>
                                         </div>
                        </Grid>
                </Grid>
        </div>
    )
}
export default Signup; 