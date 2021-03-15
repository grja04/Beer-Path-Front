import React from "react";
import YellowButton from "./../components/yellowButton";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../components/card";
import { makeStyles } from "@material-ui/core/styles";
import MapsContainer from "../components/maps";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    background: "#F5F5F5",
  },
  landing:{
    background:'#292929',
  },
  landingMiddle: {
    background: "#CD7F08",
    justifyContent: "left",
  },
  landingBottom: {
    background: "#403B3B",
    justifyContent:'right'

  }, 
  imageBottom:{
  justifyContent:'center'
  },
  cardBottom: {
    background: '#F5F5F5',
    marginLeft:'-50%',
    marginTop:'50%',
    padding:'5%'
  },
  cardWrapper: {
    background: "#F5F5F5",
    marginTop: "5%",
    justifyContent: "center",
  },
  mapContainer: {
    justifyContent: "center",
    padding: "5%",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.pageRoot}>
      <Grid container className={classes.landing}>
        <Grid>
          <img src="/landingtop.jpg" style={{ width: "150%", height: "95%" }} alt="landingtop"/>
        </Grid>
      </Grid>
      <Grid container className={classes.landingMiddle}>  
        <Grid item xs={12} sm={6} style={{ backgroundColor: "#F5F5F5" }}>
          <img src="/landingmiddle.jpg" style={{ width: "100%", height: "100%" }} alt="landingmiddle"/>
        </Grid>
        <Grid>
          <Grid container style={{ backgroundColor: "#F5F5F5" }} className={classes.cardBottom}>
          <h1>Texto de prueba para las cervezas</h1>
          </Grid>
        </Grid> 
      </Grid>
      <Grid container className={classes.landingBottom}>
        <Grid>
          <Grid container style={{ backgroundColor: "#F7A205" }} className={classes.cardBottom}>
          <h1>Texto de prueba para las cervezas</h1>
          </Grid>
        </Grid>
        <Grid container className={classes.imageBottom} item xs={12} sm={6} style={{ backgroundColor: "#403B3B" }}>
          <img src="/landingbottom.svg" style={{ width: "70%", height: "100%" }} alt="landingbottom"/>
        </Grid>
      </Grid>
      <Grid container className={classes.cardWrapper}>
        <Grid item>
          <MediaCard />
        </Grid>
        <Grid item>
          <MediaCard />
        </Grid>
        <Grid item>
          <MediaCard />
        </Grid>
        <Grid item>
          <MediaCard />
        </Grid>
      </Grid>
      <Grid container className={classes.mapContainer}>
        <MapsContainer />
      </Grid>
    </Grid>
  );
}

export default Home;
