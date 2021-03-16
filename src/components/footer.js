import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';


const useStyles = makeStyles((theme) => ({
  paragraph:{
    margin:0,
    padding:0,
  },
  paper: {
    padding: 16,
    textAlign:'center',
    color: 'white',
    background: '#1d1d1d',
    width:'100%',
    boxShadow:'none'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: '#1d1d1d'
  },
  logo:{
    fontFamily:'Bebas Neue',
  },
  social:{
    color:'#F7A205'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '-5px auto',
    background:'#ffeb3b'
  },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <AppBar position="static" color="primary" className={classes.appBar}>
          <Container maxWidth="md">
            <Toolbar>
                <Grid container>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <h3 className={classes.paragraph}>Nosotros</h3>
                        <h3 className={classes.paragraph}>Preguntas Frecuentes</h3>
                        <h3 className={classes.paragraph}>Contacto</h3>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <h1 className={classes.logo}>BEERPATH</h1>
                        <p>Evita el exceso</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <IconButton edge="end" color="inherit">
                            <FacebookIcon className={classes.social}/>
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                            <InstagramIcon className={classes.social}/>
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                            <TwitterIcon className={classes.social}/>
                        </IconButton>
                    </Paper>
                </Grid>
                </Grid>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
