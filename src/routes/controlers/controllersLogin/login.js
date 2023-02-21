const { Users } = require("../../../db");


module.exports = {  
  login: async function (user, password){
  
    try{
      console.log("pase" )
      const usersBDD = await Users.findAll({
        where:{
          name : user,
        }});
      const usersJSON = usersBDD[0].toJSON()
      console.log(usersBDD[0].toJSON() )
      await Users.update( {logged: true }, {where: {name : user, password: password}})
      return `Se logueo exitosamente el usuario ${usersJSON.name}`
    }
    catch{throw Error ("No se encuantra el usuario corresponfiente ==> Redirigir Crear su perfil")}
  

}
}
