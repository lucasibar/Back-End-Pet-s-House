const { Users } = require("../../../db");


module.exports = { 
  postUsers: async function ({ name, image, email, password, rol}){
  const newUser = await Users.create({ name, image, email, password, rol})
  
  return `Se creo con exito el usuario ${name}`
}
}
 



