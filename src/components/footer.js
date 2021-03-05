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
    background: 'black',
    width:'100%'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'black'
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
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
                <Grid item xs={12} sm={12}>
                    <Paper>
                        <h3>Contacto</h3>
                        <p>Tel. 56-11-12-40-34</p>
                        <p>Email: contacto@chelap.com</p>
                        <p>Direccion: entu corazon <FavoriteIcon/></p>
                    </Paper>
                </Grid>
                {/* {/* <Grid item xs={12} sm={12}>
                    <Paper>
                        <p><Filter9PlusIcon/></p>
                        <p>Evita el exceso</p>
                    </Paper>
                </Grid> */}
                <Grid item xs={12} sm={12}>
                    <Paper>
                        <IconButton edge="end" color="inherit">
                            <FacebookIcon color="primary"/>
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                            <InstagramIcon color="secondary"/>
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                            <TwitterIcon color="primary"/>
                        </IconButton>
                    </Paper>
                </Grid>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
