
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    background:'#F7A205'
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <h1>¿Cómo funcionamos?</h1>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <h3>Nuestra aplicacion funciona con la ayuda de nuestra comunidad; al hacer check-in cada vez que encuentres la cerveza de su preferencia. El primer paso es postear por nombre, precio, productor y con ayuda del mapa, guardar la ubicación. Ahora todos los que busquen la misma cerveza podrán verla en el mapa! </h3>
        </Typography>
        <Typography variant="body2" component="p">

        </Typography>
      </CardContent>
    </Card>
  );
}