import React from 'react'
import YellowButton from './../components/yellowButton'
import Grid from '@material-ui/core/Grid';
import SearchField from './../components/searchField'
import MediaCard from '../components/card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    background:'red',
    },
    cardWrapper:{
      background: 'green',
      margin:'5% 5%',
      padding: '2%',
      justifyContent:'center'
    }}))

function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.pageRoot}>
      <Grid item>
       <h1>Esta es la pagina de home</h1>
      </Grid>
     <Grid item>
       <SearchField/>
     </Grid>
     <Grid item>
       <YellowButton text="Post" to='/post'/>
     </Grid>
     <Grid container className={classes.cardWrapper}>
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
    </Grid>
  );
}

export default Home;