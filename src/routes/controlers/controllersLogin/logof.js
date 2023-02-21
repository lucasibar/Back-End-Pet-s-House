const { Users } = require("../../../db");


module.exports = {  
  logof: async function (usuarioID){
    try{
      const usersBDD = await Users.findAll({where:{id : usuarioID}});
      const usersJSON = usersBDD.map(el=>el.toJSON())
      
      await Users.update( {logged: false }, {where: {id: usuarioID}})
      return `El usuario ${usersJSON[0].name} se deslogueo exitosdamente`
    
    }
    catch{throw Error ("No se encuantra el usuario corresponfiente ==> Redirigir Crear su perfil")}
  

}
}