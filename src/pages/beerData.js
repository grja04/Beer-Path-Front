import React,{useState} from "react"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import YellowButton from '../components/yellowButton';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { borders } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    background:'#F7A205',
    justifyContent:'center',
    alignItems:'center',
    },
    buttonStyle:{
      background:'#292929',
      color:'#F7A205'
    },
    containerStyles:{
      border:'2px solid',
      borderColor:'#292929',
    },
    contentWrapper:{
      background:'#E5E5E5',
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
  const [beerColletion, setBeerColletion] = useState({data:[]});

  const getBeerData = event=>{
    let property = event.target.name
    let value = event.target.value
    setBeerData({...beerData, [property]:value})
  }
  const saveBeerData = ()=>{
    fetch('https://beerpath.herokuapp.com/beer/', {
        method: 'POST', // or 'PUT'
        headers: {
        'Content-Type': 'application/json',
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vYmFyIiwiaWQiOiI2MDQ5MGY3YzIxYTgwYzAwMTU2YmI0NDEiLCJpYXQiOjE2MTU0OTIyNTQsImV4cCI6MTYxNTQ5NDA1NH0.7pNT652A-es5jaFUimwQIRfGlQFLC-XmjP1UwoX_j4A",
        },
        body: JSON.stringify(beerData),
        })
        .then(response => response.json())
        .then(beerData => {
        console.log('Success:', beerData);
        })
        .catch((error) => {
        console.error('Error:', error);
});
}
const getBeerColletion = ()=>{
  fetch('https://beerpath.herokuapp.com/beer/')
      .then(response => response.json())
      .then(beerColletion => {
      setBeerColletion(beerColletion);
      console.log('aqui:', beerColletion)
      })
      .catch((error) => {
      console.error('Error:', error);
});
}
const handleChange = (event) => {
  const name = event.target.name;
  setBeerData({
    ...beerData,
    [name]: event.target.value,
  });
};
  return (
    <Grid container className={classes.pageRoot}>
      <Grid item className={classes.containerStyles} lg={6} md={6} sm={12} spacing={1}>
        <Grid item>
          <p>kjsdjbflasbflasbjbfaslblabfalsjbmqw;dlmq;wldmqw;ldmqw;lmbdjkasbdkjas</p>
        </Grid>
        <Grid item>
          <p>kjsdmq;abflasbljbflasbflasbflafblajbfaslblabfalsjbmqw;dlmq;wldmqw;ldmqw;lmbdjkasbdkjas</p>
        </Grid>
        <Grid item>
          <p>kjsdadas;kncaskl;ndlabflasbljbflasbflasbflafblajbfaslblabfalsjbmqw;dlmq;wldmqw;ldmqw;lmbdjkasbdkjas</p>
        </Grid>
      </Grid>
      <Grid item className={classes.containerStyles} lg={6} md={6} sm={12} spacing={1}>
        <Grid item sm={10} className={classes.contentWrapper}>
          <Grid item>
            <h2>Comparte tu cerveza con nosotros!!!</h2>
          </Grid>
          <Grid item className={classes.formStyle}>
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-helper">Cerveza</InputLabel>
            <NativeSelect
              value={beerData.name}
              onChange={handleChange}
              onFocus={getBeerColletion}
              inputProps={{
                name: 'beerName',
              }}
                >{
                  beerColletion.data.map(beer=>{
                    return(
                      <option value={beer.beerName}>{beer.beerName}</option>
                    )
                  })
                }
                <option aria-label="None" value="" />
                <option value={'Cerveza 2'}>Cerveza 2</option>
                <option value={'Cerveza 3'}>Cerveza 3</option>
              </NativeSelect>
              <FormHelperText>Gracias por compartir tu experiencia!</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item className={classes.formStyle}>
            <FormControl>
            <InputLabel htmlFor="my-input">Producer Home</InputLabel>
            <Input 
            onChange={getBeerData} 
            name="beerProducer" 
            id="my-input" 
            aria-describedby="my-helper-text" 
            />
            </FormControl>
          </Grid>
          <Grid item className={classes.formStyle}>
            <Button variant="contained"  onClick={saveBeerData} className={classes.buttonStyle}>
              HECHO!
            </Button>
          </Grid>
          <Grid item className={classes.formStyle}>
          <Link to='/post'><Button variant="contained" className={classes.buttonStyle} >
              COMPARTE UNA CERVEZA!
            </Button></Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default BeerData;