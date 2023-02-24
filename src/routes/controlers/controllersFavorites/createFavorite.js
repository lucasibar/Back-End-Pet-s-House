const { Users, Pets, FavoritesPets } = require("../../../db");

module.exports = {
  createFavorite: async function (idPets, idUser) {
  try{
    const newFavorite = await FavoritesPets.create()
    const user = await Users.findByPk(idUser);
    const pet =await Pets.findByPk(idPets)

    await pet.addUser(user.id)
    await user.addPet(pet.id)
  return "respuesta"
  }
  catch{throw Error ("Fallo la coneccion con la base de datos")}
  }}
