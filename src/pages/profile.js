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
import { Container, Grid, Hidden } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'


const userName = {alignItems: 'flexStart', paddingBottom:'4%'}


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    
    
    }

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(beer, price, producer, place) {
  return { beer, price, producer, place };
}

const rows = [
  createData('Negra Modelo', '$40', 'Cerveceria fortuna', 'Taberna Condesa'),
  createData('Negra Modelo', '$40', 'Cerveceria fortuna', 'Taberna Condesa'),
  createData('Negra Modelo', '$40', 'Cerveceria fortuna', 'Taberna Condesa'),
  createData('Negra Modelo', '$40', 'Cerveceria fortuna', 'Taberna Condesa'),
  createData('Negra Modelo', '$40', 'Cerveceria fortuna', 'Taberna Condesa'),
  createData('Negra Modelo', '$40', 'Cerveceria fortuna', 'Taberna Condesa'),
  createData('Negra Modelo', '$40', 'Cerveceria fortuna', 'Taberna Condesa'),
  createData('Negra Modelo', '$40', 'Cerveceria fortuna', 'Taberna Condesa'),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 360,
    height: '20vh'
   
    
    
  },
  containerTable: {
    backgroundColor: '#FFBF00',
    padding: '5%'
  },
  userAvatar:{
  width: 200,
  height: 200
  }
 
  

});
function Profile() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} className={classes.containerTable} >
      <Grid align='center'>
        <Avatar className={classes.userAvatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
        
        </Grid>
      
      <h1 style={userName}>Rodrok7</h1>
      <Grid item xs={12} sm={12}>
        <Paper elevation={1}>
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cerveza</StyledTableCell>
            <StyledTableCell align="center">Precio</StyledTableCell>
            <StyledTableCell align="center">Producer</StyledTableCell>
            <StyledTableCell align="center">Lugar</StyledTableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.beer}>
              <StyledTableCell component="th" scope="row">
                {row.beer}
              </StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.producer}</StyledTableCell>
              <StyledTableCell align="center">{row.place}</StyledTableCell>
             
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