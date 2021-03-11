import React,{useState} from "react"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import YellowButton from '../components/yellowButton';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    background:'#FFBF00',
    },
    contentWrapper:{
      background:'#FFBF00',
      margin:'1%',
      justifyContent:'center',
      alignItems:'center',
      display:'block',
      border:'2px solid',
      borderColor:'#1d1d1d',
      borderRadius:'20px',
      padding:'2%',
    },
    formStyle:{
      margin:'3%'
    }}))

function BeerData() {
  const classes = useStyles();
  const [beerData, setBeerData] = useState({});
  const getBeerData = event=>{
    let property = event.target.name
    let value = event.target.value
    setBeerData({...beerData, [property]:value})
  }
  const saveBeerData = ()=>{
    console.log('el boton esta funcionando en post')
    fetch("",{
      method: "POST",
      body: JSON.stringify(beerData)
    })
  }
  return (
    <Grid container className={classes.pageRoot}>
      <Grid container className={classes.contentWrapper}>
        <Grid item>
          <h1>Comparte tu cerveza con nosotros!!!</h1>
        </Grid>
        <Grid item className={classes.formStyle}>
          <FormControl>
          <InputLabel htmlFor="my-input">Beer Name</InputLabel>
          <Input 
          onChange={getBeerData} 
          name="name" 
          id="my-input" 
          aria-describedby="my-helper-text" 
          />
          <FormHelperText id="my-helper-text">Thanks for share your experience!</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item className={classes.formStyle}>
          <FormControl>
          <InputLabel htmlFor="my-input">Producer Home</InputLabel>
          <Input 
          onChange={getBeerData} 
          name="producer" 
          id="my-input" 
          aria-describedby="my-helper-text" 
          />
          </FormControl>
        </Grid>
        <Grid item className={classes.formStyle}>
          <YellowButton text="Done!" onClick={saveBeerData}/>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default BeerData;