const { Users } = require("../../../db");


module.exports = { 
  postUsers: async function ({  
    name, 
    image, 
    email, 
    password 
    }){
  const newUser = await Users.create({name, image, email, password})
  const user = await Users.findAll({
    where:{
      email:email
    }
  })
  
  return user[0]
}
}
 



