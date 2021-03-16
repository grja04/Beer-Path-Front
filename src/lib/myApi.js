
export default {
 async getAllBeers(token){
   const response = await fetch(`https://beerpath.herokuapp.com/beer/`, {
     headers: {
       'Authorization': token
     }
   })
 }
}