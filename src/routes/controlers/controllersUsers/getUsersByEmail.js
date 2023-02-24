const { Users } = require("../../../db");

module.exports = {
  getUsersByEmail: async function (email) {
try{
  const usersBDD = await Users.findOne({
    where:{email: email}
  });
  const user = usersBDD.toJSON()
  return user
}
catch{throw Error ("Fallo la coneccion con la base de datos")}
}}
