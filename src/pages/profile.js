import React,{useState, useEffect} from 'react' 
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import userMediaQuery from '@material-ui/core/useMediaQuery'
import { CardMedia, Container, Grid, Hidden } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea'
import {useHistory} from 'react-router-dom'
import {Link} from "react-router-dom";




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Modelo', "$40", "Cuauthemoc", "Condesa"),
 
];


const useStyles = makeStyles({
  root: {
    minWidth: 300,
    backgroundColor: '#403b3b',
    margin:'2% 5%',
      padding: '2%',
      
      height: '20vh',
      
  },
  addButton: {
    backgroundColor: '#F7A205',
    fontFamily:"Bebas Neue",
    width: 'auto',
    height: 'auto',
    display: 'flex run-in',
    
    
    
  },
  userName: {
    fontFamily: 'Montserrat',
    color: 'white',
  
  },
  containerBase: {
    
    
    backgroundColor: '#403b3b',
    minWidth: 100
    },

  profileImage: {
    height: 'auto',
    src:'src/images/d5002966723d78953059efe47396ef04-ilustraci-oacute-n-de-mano-de-vaso-de-cerveza-by-vexels.png',
 },
  table: {
    minWidth: 300,
  },

paper1: {
  
  width: '70%',
  margin: "179px",
  minWidth: 300,
  
},

buttonContainer: {
  paddingTop: '50px'
}

});








function Profile() {
  const classes = useStyles();
  // const history = useHistory()
  // const [token, setToken] = useState(null)

  // useEffect(()=>{
  // const myToken = localStorage.getItem('token')
  // setToken(myToken)
  // }, [])

  // if(!token){
  //   return null
  // }

  return (
    
    <Grid className={classes.root} >
      <Grid container
  direction="row"
  justify="center"
  
  className={classes.containerBase}>
    <Grid item xs={4} component="img" image='src/images/d5002966723d78953059efe47396ef04-ilustraci-oacute-n-de-mano-de-vaso-de-cerveza-by-vexels.png' className={classes.profileImage}>
   
    
    </Grid>
     <Grid item xs={4}  >
    <Typography className={classes.userName} variant="h5">Koder10</Typography>
     </Grid>

     <Grid item xs={4} align='right' className={classes.buttonContainer}>
      <Link to='post'>
     <Button variant="contained" size="large" className={classes.addButton} text='Post' to='/post/'> Añade una Cerveza</Button>
     </Link>
     </Grid>
  </Grid>
  <Paper item xs={12} >
    
  </Paper>

  <Grid>
    
  </Grid>
 <TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
  <TableHead>
    <TableRow>
      <StyledTableCell>Cerveza</StyledTableCell>
      <StyledTableCell align="center">Precio</StyledTableCell>
      <StyledTableCell align="center">Productor</StyledTableCell>
      <StyledTableCell align="center">Lugar de consumo</StyledTableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="center">{row.calories}</StyledTableCell>
        <StyledTableCell align="center">{row.fat}</StyledTableCell>
        <StyledTableCell align="center">{row.carbs}</StyledTableCell>
       
      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
    </Grid>

    
    
    
  
  
    

   
     
    


 

     
    
  


    

   

 
   
  );
  
}

export default Profile;