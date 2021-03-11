import React,{useState} from "react"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import YellowButton from '../components/yellowButton';
import NativeSelect from '@material-ui/core/NativeSelect';

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
  const [beerColletion, setBeerColletion] = useState({});

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
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZ…IxNX0.FMC2PZosXCggIsrZMyl1cVt2fjy4XHX9T0Z4Bpoy2tM",
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
      <Grid container className={classes.contentWrapper}>
        <Grid item>
          <h1>Comparte tu cerveza con nosotros!!!</h1>
        </Grid>
        <Grid item className={classes.formStyle}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-helper">Cerveza</InputLabel>
            <NativeSelect
              value={beerData.name}
              onChange={handleChange}
              onFocus={getBeerColletion}
              inputProps={{
                name: 'name',
              }}
                >
              <option aria-label="None" value="" />
              <option value={'Cerveza 1'}>Cerveza 1</option>
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