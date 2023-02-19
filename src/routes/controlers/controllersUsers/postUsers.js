const { Users } = require("../../../db");


module.exports = { 
  postUsers: async function ({ id, name, image, email, password, rol, logged}){
  const newUser = await Users.create({id, name, image, email, password, rol, logged})
  
  return `Se creo con exito el usuario ${name}`
}
}
 



