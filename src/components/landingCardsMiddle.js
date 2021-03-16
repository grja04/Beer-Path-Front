
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    background:'#F5F5F5'
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
          <h1>¿Qué es BeerPath?</h1>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <li><h2>adjective</h2></li> 
        </Typography>
        <Typography variant="body2" component="p">

        </Typography>
      </CardContent>
    </Card>
  );
}