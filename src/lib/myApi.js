async function getAllBeers(token){
   const response = await fetch(`https://beerpath.herokuapp.com/beer/`, {
     headers: {
       'Authorization': token
     }
   })
   return await response.json()
 } 

 async function getPostById (token, id, callback){
   await fetch(`https://beerpath.herokuapp.com/beer/${id}`, {
     method:'GET',
     headers:{
       'Content-Type': 'application/json',
       'Authorization': token
     }
   })
   .then(response => {
     if(!response.ok){
       return response.json()
       .then(error =>{throw new Error(error.message)})
     }
     return response.json()
   })
   .then(json => callback(json.data))
   .catch(error => console.log(error))
 }


export {
 getAllBeers,
 getPostById


}