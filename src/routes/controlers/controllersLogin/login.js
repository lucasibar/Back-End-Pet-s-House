const { Users } = require("../../../db")

module.exports = {
  login: async function (email, password) {
    try{
      
      const emailValidation = await Users.findAll({
        where:{
          email: email
        }
      });
      const existingMail = emailValidation[0].toJSON()
      const passwordValidation = await Users.findAll({
        where:{
          email : email,
          password: password
        }
      });
      const existingPassword = passwordValidation[0].toJSON()

    if(existingMail){
      if(existingPassword){
        return existingPassword
      }
      return 'Contraseña invalida'
    }
    return 'Usuario inexistente'
}
catch{throw Error ("Fallo la coneccion con la base de datos")}
}}
