import './App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import LogIn from './pages/logIn'
import SignUp from './pages/signUp'
import Profile from './pages/profile'
import Post from './pages/post'
import NavBar from './components/navbar'
import BottomAppBar from './components/footer'

const useStyles = makeStyles((theme) => ({
  root: {
    background:'red',
    flexGrow:1,
    textAlign: 'center',
    width: '100%',
    margin: 0,
    padding: 0,
  }
}));


function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Router>
        <Grid item className={classes.root}>
          <NavBar/>
          <Link to='/profile'>profile</Link>
          <Switch>
            <Route path="/logIn">
              <LogIn/>
            </Route>
            <Route path="/signUp">
              <SignUp/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/post">
              <Post/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </Grid>
        <Grid item className={classes.root}>
          <BottomAppBar/>
        </Grid>
      </Router>
    </Grid>
  );
}

export default App;
