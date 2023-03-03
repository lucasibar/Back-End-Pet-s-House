const { Users } = require("../../../db")

module.exports = {
  login: async function (email, password) {
    try{
      
      const emailValidation = await Users.findAll({
        where:{
          email: email
        }
      });
      const existingMail = emailValidation.map(el=>el.toJSON())
      const passwordValidation = await Users.findAll({
        where:{
          email : email,
          password: password
        }
      });
      const existingPassword = passwordValidation.map(el=>el.toJSON())

    if(existingMail>0){
      if(existingPassword>0){
        return existingPassword
      }
      return 'Contraseña invalida'
    }
    return 'Usuario inexistente'
}
catch{throw Error ("Fallo la coneccion con la base de datos")}
}}
