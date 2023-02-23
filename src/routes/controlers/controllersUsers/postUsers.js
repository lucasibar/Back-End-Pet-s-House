const { Users } = require("../../../db");


module.exports = { 
  postUsers: async function ({  
    name, 
    image, 
    email, 
    password 
    }){
  const newUser = await Users.create({name, image, email, password})
  
  return `Se creo con exito el usuario ${name}`
}
}
 



