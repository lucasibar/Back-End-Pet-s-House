const { Users } = require("../../../db")

module.exports = {
  login: async function (email, password) {
    try{
      
      const emailValidation = await Users.findOne({
        where:{
          email: email
        }
      });
      const passwordValidation = await Users.findOne({
        where:{
          email : email,
          password: password
        }
      });
      
      if(emailValidation !== null){
        const usuario =emailValidation.toJSON()
        if(usuario.active === false) return 'Este usuario fue dado de baja'
        if(passwordValidation !== null){
        return passwordValidation.toJSON()
      }
      return 'Contraseña invalida'
    }
    return 'Usuario inexistente'
}
catch{throw Error ("Fallo la coneccion con la base de datos")}
}}
