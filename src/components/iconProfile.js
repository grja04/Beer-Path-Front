import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  profileIcon:{
    width:'90px',
    height:'40px',
    color: 'white'
},
}))

export default function IconProfile(props){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={props.to}>
        <AccountCircleIcon className={classes.profileIcon} onClick={props.onClick}>{props.text}</AccountCircleIcon>
      </Link>
    </div>
  )
}