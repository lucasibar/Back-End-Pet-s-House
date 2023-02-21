const { Users } = require("../../../db");


module.exports = {  
  login: async function (user, password){

    try{
      const usersBDD = await Users.findAll({
        where:{
          name : user,
          password
        }});
      const usersJSON = usersBDD.map(el=>el.toJSON())

      await Users.update( {logged: true }, {where: {name : user, password: password}})
      return `Se logueo exitosamente el usuario ${usersJSON[0].name}`
    }
    catch{throw Error ("No se encuantra el usuario corresponfiente ==> Redirigir Crear su perfil")}
  

}
}
