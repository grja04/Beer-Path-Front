import React, {useState} from "react";
import { Grid, TextField, Button } from "@material-ui/core";
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



const LogIn = () => {
    const classes = useStyles();
    const [logInData, setlogInData] = useState({});
  
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

        <div>
            <Grid container stlye={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={6} style={{ backgroundColor: '#F5F5F5' }}>

                    <img src='/beer-celebration.svg' style={{ width: '100%', height: '100%',}} alt="brand">
                    </img>
                </Grid>
                <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding:10,  backgroundColor: '#F5F5F5'}}>
                <div/>
                <div style={{display:"flex", flexDirection:"column", maxWidth:400, mingWidth:300}}>
                <Grid class="fontBeba" container justify="center" width={200}>
                <h2>SIGN IN</h2>
                </Grid>
                <TextField className={classes.root} label="Username" margin="normal" required/>
                <TextField className={classes.root} type="password" label="Password" margin="normal" required/>
                <div style={{height:20}}/>
                <Button class="fontBeba" style={{backgroundColor:"#292929", color:"#F7A205"}} variant="contained">
                HECHO!
                </Button>
                <Button class="fontBeba" style={{border:"none", backgroundColor:"#f5f5f5"}}> Aun no tienes cuenta?</Button>
                </div>
                <div/>
                </Grid>
            </Grid>
        </div>

    )
}
export default LogIn;