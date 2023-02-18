const { Users } = require("../../db");


module.exports = { 
  putUsers: async function (usuarioID){
  const userId = await Users.findOne({
    where:{
        id: usuarioID
    }
  })
  userId.logged = false
  return `Se desloggeo exitosamente`
}
}