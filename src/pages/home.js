import React from 'react'
import YellowButton from './../components/yellowButton'
import Grid from '@material-ui/core/Grid';
import SearchField from './../components/searchField'
import MediaCard from '../components/card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    }}))

function Home() {
  const classes = useStyles();
  return (
    <>
    <Grid item>
      <h1>Esta es la pagina de home</h1>
    </Grid>
    <Grid item>
      <SearchField/>
    </Grid>
    <Grid item>
      <YellowButton text="Post" to='/post'/>
    </Grid>
    <Grid container>
      <Grid item>
        <MediaCard/>
      </Grid>
      <Grid item>
        <MediaCard/>
      </Grid>
      <Grid item>
        <MediaCard/>
      </Grid>
      <Grid item>
        <MediaCard/>
      </Grid>
    </Grid>
    </>
  );
}

export default Home;