const { Users } = require("../../../db");

module.exports = {
  getUsersByEmail: async function (email) {
try{
  const usersBDD = await Users.findOne({
    where:{email: email}
  });
  if(usersBDD){
    const user = usersBDD.toJSON()
    return user
  }else{
    return `No se encontro el email ${email} en la base de datos` 
  }
}
catch{throw Error ("Fallo la coneccion con la base de datos")}
}}
