const { Users, Pets } = require("../../../db");

module.exports = {
  createFavorite: async function (idPets, idUser) {
  try{
    const userID = await Users.findByPk(idUser)
    const petID =await Pets.findByPk(idPets)
    await userID.addPets(idPets)
  return "respuesta"
  }
  catch{throw Error ("Fallo la coneccion con la base de datos")}
  }}
