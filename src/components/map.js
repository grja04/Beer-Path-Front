import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    },
    paper:{
      backgroundColor: '#BF00',
      boxShadow: 'none',
      color: 'white',
      width:'100%'
    },
    iconButton:{
      color:'white'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    }}))

export default function SearchField() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <InputBase
         className={classes.input}
         placeholder="Search"
         inputProps={{ 'aria-label': 'search google maps' }}
       />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}
