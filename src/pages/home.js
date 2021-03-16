import React from "react";
import YellowButton from "./../components/yellowButton";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../components/card";
import { makeStyles } from "@material-ui/core/styles";
import MapsContainer from "../components/maps";
import LandingCardMiddle from '../components/landingCardsMiddle'
import LandingCardBottom from '../components/landingCardsBottom'
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from "@react-google-maps/api";

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    background: "#F5F5F5",
  },
  landing: {
    background: '#292929',
  },
  textLanding: {
    justifyContent: 'center',
    fontColor: '#F5F5F5',
  },
  landingMiddle: {
    background: "#CD7F08",
    justifyContent: "left",
  },
  cardMiddle: {
    background: '#CD7F08',
    justifyContent: 'center',
    padding:'5%'
  },
  landingBottom: {
    background: "#403B3B",
    justifyContent: 'right'
  },
  imageBottom: {
    justifyContent: 'center'
  },
  cardBottom: {
    justifyContent: 'center',
    padding:'5%'
  },
  cardWrapper: {
    background: "#F5F5F5",
    marginTop: "5%",
    justifyContent: "center",
  },
  mapContainer: {
    justifyContent: "center",
    padding: '5%',
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.pageRoot}>
      <Grid container item xs={12} sm={12} className={classes.landing}>
        <img src="/landingtop.jpg" style={{ width: "100%", height: "95%" }} alt="landingtop" />
      </Grid>
      <Grid container className={classes.landingMiddle}>
        <Grid item xs={12} sm={6} container style={{ backgroundColor: "#F5F5F5" }}>
          <img src="/landingmiddle.jpg" style={{ width: "100%", height: "100%" }} alt="landingmiddle" />
        </Grid>
        <Grid item xs={12} sm={6} container className={classes.cardMiddle}>
          <LandingCardMiddle/>
        </Grid>
      </Grid>
      <Grid container className={classes.landingBottom}>
        <Grid item xs={12} sm={6} container className={classes.cardBottom}>
          <LandingCardBottom/>
        </Grid>
        <Grid container className={classes.imageBottom} item xs={12} sm={6} style={{ backgroundColor: "#403B3B" }}>
          <img src="/landingbottom.svg" style={{ width: "70%", height: "100%" }} alt="landingbottom" />
        </Grid>
      </Grid>
      <Grid item container className={classes.cardWrapper}>
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
      <Grid container className={classes.mapContainer}>
        <h1>¡Comparte una cerveza con nosotros!</h1>
        <MapsContainer/>
      </Grid>
    </Grid>
  );
}

export default Home;
