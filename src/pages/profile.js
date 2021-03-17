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
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'
import {getPostById} from '../lib/myApi'
import { Link } from "react-router-dom";



const rows = [{
  beerName: 'corona1',
  beerCost: 50,
  beerProducer: 'cuauthemoc',
  beerLocation: 'la roma'
},
{
  beerName: 'corona4',
  beerCost: 80,
  beerProducer: 'cuauthemoc',
  beerLocation: 'la condesa'
},
{
  beerName: 'victoria1',
  beerCost: 40,
  beerProducer: 'cuauthemoc',
  beerLocation: 'del valle'
}
] 

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




const useStyles = makeStyles({
  
  addButton: {
    backgroundColor: '#F7A205',
    fontFamily:"Bebas Neue",
   
    
    
    
    
    
  },
  userName: {
    fontFamily: 'Montserrat',
    color: 'white',
   
  
  },
  containerBase: {
    
    
    backgroundColor: '#403b3b',
    minWidth: 100,
    margin: '25px'
    
    },

  profileImage: {
    
    src:'/d5002966723d78953059efe47396ef04-ilustraci-oacute-n-de-mano-de-vaso-de-cerveza-by-vexels.png',
    width:'40%', 

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
 
  
},
root: {
 

},

tableContainer:{
  
}

});







function Profile() {
 
  const classes = useStyles();
  const history = useHistory()
  // const [token, setToken] = useState(null)

  // useEffect(()=>{
  // const myToken = localStorage.getItem('token')
  // setToken(myToken)
  // }, [])

  // if(!token){
  //   return null
  // }
  // const postDataByID = ()=>{
  //   fetch('https://beerpath.herokuapp.com/beer/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(getPostById),
  //   })
  //   .then(res => res.json())
  //   .then(getPostById =>{
  //     console.log('Success:', getPostById)
  //   })

  // }

   

  return (
    
    <Grid container direction='row'  >

      
   <Grid container 
   direction='row'
   justify='center'
   
   className={classes.containerBase}
   item xs={12} sm={12} md={12} lg={12}
   >

     <Grid item xs={4} sm={4} >
       <Grid  className={classes.profileImage} align='left' component='img' src='/d5002966723d78953059efe47396ef04-ilustraci-oacute-n-de-mano-de-vaso-de-cerveza-by-vexels.png'></Grid>
     </Grid>


     <Grid item xs={4} sm={4} className={classes.userName}>
       <Typography variant='h4'className={classes.userName}>Koder10</Typography>
     </Grid>


     <Grid item xs={4} sm={4} justify='center' align='center' className={classes.buttonContainer}>
      <Link to='/post'>
       <Button variant="contained" size='large' className={classes.addButton}>Check-in</Button>
      </Link>    
     </Grid>



   </Grid>



   <Grid  item xs={12} sm={12} md={12} lg={12}>
      <Paper  >
    <TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
  <TableHead>
    <TableRow>
      <StyledTableCell >Cerveza</StyledTableCell>
      <StyledTableCell  align="center">Precio</StyledTableCell>
      <StyledTableCell  align="center">Productor</StyledTableCell>
      <StyledTableCell  align="center">Lugar de consumo</StyledTableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <StyledTableRow key={row.beerName}>
    
        <StyledTableCell  align="center">{row.beerName}</StyledTableCell>
        <StyledTableCell  align="center">{row.beerCost}</StyledTableCell>
        <StyledTableCell align="center">{row.beerProducer}</StyledTableCell>
        <StyledTableCell align="center">{row.beerLocation}</StyledTableCell>
       
      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
  </Paper>
   </Grid>
  
 
   
 
    </Grid>

    

    
    
    
  
  
    

   
     
    


 

     
    
  


    

   

 
   
  );
  
}

export default Profile;