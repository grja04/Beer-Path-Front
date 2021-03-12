import React,{useState} from "react"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import YellowButton from '../components/yellowButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

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

function Post() {
  const classes = useStyles();
  const [postData, setPostData] = useState({});
  const getPostData=event=>{
    let property = event.target.name
    let value = event.target.value
    setPostData({...postData, [property]:value})
  }
  const savePostData = ()=>{
    console.log('el boton esta funcionando en post')
    fetch("",{
      method: "POST",
      body: JSON.stringify(postData)
    })
  }
  return (
    <Grid container className={classes.pageRoot}>
      <Grid container className={classes.contentWrapper}>
        <Grid item>
          <h1>Please, fill the information!!!</h1>
          <Link to='/beer'><Button variant="contained" color="secondary">
            NUEVA CERVEZA
          </Button></Link>
        </Grid>
        <Grid item className={classes.formStyle}>
          <FormControl>
          <InputLabel htmlFor="my-input">Beer Name</InputLabel>
          <Input 
          onChange={getPostData} 
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
          onChange={getPostData} 
          name="producer" 
          id="my-input" 
          aria-describedby="my-helper-text" 
          />
          </FormControl>
        </Grid>
        <Grid item className={classes.formStyle}>
          <FormControl>
          <InputLabel htmlFor="my-input">Place</InputLabel>
          <Input 
          onChange={getPostData} 
          name="location" id="my-input" 
          aria-describedby="my-helper-text" 
          />
          </FormControl>
        </Grid>
        <Grid item className={classes.formStyle}>
          <FormControl>
          <InputLabel htmlFor="my-input">Price</InputLabel>
          <Input 
          onChange={getPostData} 
          name="price" 
          id="my-input" 
          aria-describedby="my-helper-text" 
          />
          </FormControl>
        </Grid>
        <Grid item className={classes.formStyle}>
          <TextField 
            name="review"
            onChange={getPostData} 
            id="outlined-multiline-static"
            label="Comments"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item className={classes.formStyle}>
          <YellowButton text="Done!" onClick={savePostData}/>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Post;