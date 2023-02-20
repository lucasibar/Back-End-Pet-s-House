const { Users } = require("../../db");


module.exports = {  
  login: async function (usuarioID){
    try{
      // const usersBDD = await Users.findAll();
      // const usersJSON = usersBDD.map(el=>el.toJSON())
      // console.log("ACA ESTA EL USUARIO AL QUE LE VAMOS A CAMBIAR EL LOG", usersJSON)
      await Users.update( {logged: true }, {
        where: {
            id: usuarioID
        }
      })
      return petsJSON
      return `Se logueo exitosamente el usuario ${name}`
    }
    catch{throw Error ("Fallo la coneccion con la base de datos")}
  

}
}
