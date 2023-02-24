const { Pets } = require("../../../db");

module.exports = {
  getPublications: async function (idUser) {
  try{
    const userPublicationsPets = await Pets.findAll({where:{UserId: idUser}})
    return userPublicationsPets
  }
  catch{throw Error ("Fallo la coneccion con la base de datos")}
  }}