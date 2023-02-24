const { Users } = require("../../../db");


module.exports = { 
  userChanger: async function (userChangeProperties){
    let { idUser } = userChangeProperties
  const newUser = await Users.update(userChangeProperties, {
    where:{id:idUser}
  })
  const user= Users.findAll({
    where:{id:idUser}
  })

  return user
}
}
 



