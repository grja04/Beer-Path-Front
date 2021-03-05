import React from 'react'
import YellowButton from './../components/yellowButton'
import Grid from '@material-ui/core/Grid';
import SearchField from './../components/searchField'

function Home() {
  return (
    <>
    <h1>Esta es la pagina de home</h1>
    <Grid item>
      <SearchField/>
    </Grid>
    <Grid item>
      <YellowButton text="Post" to='/post'/>
    </Grid>
    </>
  );
}

export default Home;