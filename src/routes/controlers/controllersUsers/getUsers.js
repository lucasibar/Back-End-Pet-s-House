const { Users } = require("../../../db");

module.exports = {
  getUsers: async function () {
try{
  const usersBDD = await Users.findAll();
  const usersJSON = usersBDD.map(el=>el.toJSON())
  return usersJSON
}
catch{throw Error ("Fallo la coneccion con la base de datos")}
}}
