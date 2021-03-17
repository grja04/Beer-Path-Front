import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button:{
    background:'#F7A205',
    width:'90%',
    margin:'1%'
  },
}));

export default function YellowButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={props.to}>
        <Button variant="contained" className={classes.button} onClick={props.onClick}>
          {props.text}
        </Button>
      </Link>
    </div>
  );
}
