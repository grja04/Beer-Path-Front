import React from 'react'
import YellowButton from './../components/yellowButton'
import Grid from '@material-ui/core/Grid';
import MediaCard from '../components/card';
import { makeStyles } from '@material-ui/core/styles';
import MapsContainer from '../components/maps'
import {GoogleMap,useLoadScript, Marker, InfoWindow} from '@react-google-maps/api'; 




const useStyles = makeStyles((theme) => ({
  pageRoot: {
    background:'#F5F5F5',
    },
    contentWrapper:{
      background:'#F5F5F5',
      justifyContent: 'center',
      marginTop:'-10%'
    },
    landingMiddle:{
      background:'#CD7F08',
      justifyContent:'left',
      marginTop: '3%',

    },
    landingBottom:{
      background:'#403B3B',
      justifyContent:'right',
      marginTop:'3%'
    },
    cardWrapper:{
      background: '#F5F5F5',
      marginTop: '5%',
      justifyContent:'center'
    },
    mapContainer:{
      justifyContent:'center',
      padding:'5%'
    }
  }))

function Home() {
  
  const classes = useStyles();
  return (
    <Grid container className={classes.pageRoot}>
      <Grid container className={classes.landing}>
      <img src='/landingtop.jpg' style={{ width: '100%', height: '80%',}} alt="landingtop"/> 
      </Grid>
      <Grid container className={classes.contentWrapper}>
        <Grid item>
          <Grid container className={classes.landingMiddle} >
              <Grid item xs={12} sm={6} style={{ backgroundColor: '#FFBF00' }}>
                  <img src='/landingmiddle.jpg' style={{ width: '100%', height: '100%',}} alt="landingmiddle"/>
              </Grid>
          </Grid> 
          <Grid container className={classes.landingBottom}>
              <Grid item xs={12} sm={6} style={{ backgroundColor: '#F5F5F5' }}>
                <img src='/landingbottom.svg' style={{ width: '100%', height: '100%',}} alt="landingbottom"/>
              </Grid>
          </Grid>    
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

      <Grid container className={classes.mapContainer} >
         <MapsContainer/>
      </Grid>

    </Grid>
  );
}

export default Home;