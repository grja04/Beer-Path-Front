import React from 'react'
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
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const useStyles = makeStyles({
  root: {
    minWidth: 800,
    backgroundColor: '#403b3b',
    margin:'2% 5%',
      padding: '2%',
      justifyContent:'center',
      height: '20vh',
      
  },
  addButton: {
    backgroundColor: '#F7A205',
    fontFamily:"Bebas Neue",
    width: '200px',
    height: '50px'
    
  },
  userName: {
    fontFamily: 'Montserrat',
    color: 'white'
  },
  containerBase: {
    
    
    backgroundColor: '#403b3b',
    
      padding: '5% 5%',
      marginInline: '5% 2% 5%',
      height: '20vh',
      margin: '40px 40px 50px 1px',
      

  },

  profileImage: {
    src:"src/images/d5002966723d78953059efe47396ef04-ilustraci-oacute-n-de-mano-de-vaso-de-cerveza-by-vexels.png"
  },
  table: {
    minWidth: 700,
  },

});







function Profile() {
  const classes = useStyles();
  
  return (
    <Grid>
       <Card className={classes.root} variant="outlined" >
    <CardContent >
      <CardMedia xs={4} component="img" image="/d5002966723d78953059efe47396ef04-ilustraci-oacute-n-de-mano-de-vaso-de-cerveza-by-vexels.png" >
    
      </CardMedia>
      <Typography className={classes.userName} xs={4} variant="h5" component="h2">Koder10</Typography>
      <Button className={classes.addButton} variant="contained" size='large'>Añade una Cerveza</Button>
    </CardContent>
    
  </Card>  
  <Paper>
    <TableContainer component={Paper}>
<Table className={classes.table} aria-label="customized table">
  <TableHead>
    <TableRow>
      <StyledTableCell>Dessert (100g serving)</StyledTableCell>
      <StyledTableCell align="right">Calories</StyledTableCell>
      <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
      <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
      <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="right">{row.calories}</StyledTableCell>
        <StyledTableCell align="right">{row.fat}</StyledTableCell>
        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
        <StyledTableCell align="right">{row.protein}</StyledTableCell>
      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
  </Paper>


    </Grid>

   

 
   
  );
  
}

export default Profile;