import React, { useState } from "react"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import YellowButton from '../components/yellowButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    background: '#F5F5F5',
  },
  contentWrapper: {
    background: '#F5F5F5',
    justifyContent: 'center',
    border: '5px solid',
    borderColor: '#403B3B',
    padding: '5%',
  },
  formStyle: {
    margin: '5%',
    background: '#F5F5F5',
    font:'#F5F5F5',
    width: '50%',
  },
  imagePost: {
    justifyContent: 'right'
  },
  button: {
    background: '#F7A205',
    justifyContent: 'center',
    width:'15%'
  },
  formContainer: {
    justifyContent: 'rigth',
    background: '#292929'
  }
}))

function Post() {
  const classes = useStyles();
  const [postData, setPostData] = useState({});
  const getPostData = event => {
    let property = event.target.name
    let value = event.target.value
    setPostData({ ...postData, [property]: value })
  }
  const savePostData = () => {
    console.log('el boton esta funcionando en post')
    fetch("", {
      method: "POST",
      body: JSON.stringify(postData)
    })
  }
  return (
    <Grid container className={classes.pageRoot}>
      <Grid item xs={12} sm={6} className={classes.formContainer}>
        <Grid container className={classes.contentWrapper}>
          <Grid item>
            <h1>Por favor, llena los espaciós siguientes</h1>
          </Grid>
          <Grid item className={classes.formStyle}>
            <FormControl>
              <InputLabel htmlFor="my-input">Nombre de cerveza</InputLabel>
              <Input
                onChange={getPostData}
                name="name"
                id="my-input"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-helper-text">¡Gracias por compartir la experiencia!</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item className={classes.formStyle}>
            <FormControl>
              <InputLabel htmlFor="my-input">Productor</InputLabel>
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
              <InputLabel htmlFor="my-input">Lugar</InputLabel>
              <Input
                onChange={getPostData}
                name="location" id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.formStyle}>
            <FormControl>
              <InputLabel htmlFor="my-input">Precio</InputLabel>
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
              label="Tús comentarios"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>

        </Grid>          
        <Grid>
            <Link to=''><Button variant="contained" className={classes.button}>
              Publicar Cerveza
            </Button></Link>
          </Grid>
      </Grid>
      <Grid item xs={12} sm={6} container className={classes.imagePost}>
        <Grid container style={{ background: '#F7A205' }}>
          <img src="/cervezaPost.jpeg" style={{ width: "100%", height: "100%" }} alt="landingmiddle" />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Post;