import React from 'react'
import YellowButton from './../components/yellowButton'
import Grid from '@material-ui/core/Grid';
import SearchField from './../components/searchField'
import MediaCard from '../components/card';
import { makeStyles } from '@material-ui/core/styles';
import MapsContainer from '../components/maps'
import {GoogleMap,useLoadScript, Marker, InfoWindow} from '@react-google-maps/api'; 


const useStyles = makeStyles((theme) => ({
  pageRoot: {
    background:'#FFBF00',
    },
    contentWrapper:{
      background:'#FFBF00',
      margin:'1%',
      justifyContent:'center',
      alignItems:'center',
      display:'block'
    },
    cardWrapper:{
      background: '#1d1d1d',
      margin:'2% 5%',
      padding: '2%',
      justifyContent:'center'
    }}))

function Home() {
  
  const classes = useStyles();
  return (
    <Grid container className={classes.pageRoot}>
      <Grid container className={classes.contentWrapper}>
        <Grid item>
          <SearchField/>
        </Grid>
        <Grid item>
        <div >
         <MapsContainer/>
        </div>
        </Grid>
        <Grid item>
          <YellowButton text="Post" to='/post'/>
        </Grid>
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