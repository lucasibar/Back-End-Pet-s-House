const { Users } = require("../../../db");


module.exports = {  
  login: async function (email, password){
    try{
      
      const emailValidation = await Users.findOne({where:{email}});
      const passwordValidation = await Users.findOne({where:{
        email : email,
        password: password
      }});

    if(emailValidation){
      if(passwordValidation){
        return passwordValidation
      }
      return 'Contraseña invalida'
    }
    return 'Usuario inexistente'
    }
    catch{throw Error ("Falla en la coneccion con la BDD")}
}
}
