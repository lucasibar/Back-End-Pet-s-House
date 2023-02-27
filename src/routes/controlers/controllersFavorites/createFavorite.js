const { Users, Pets, FavoritesPets } = require("../../../db");

module.exports = {
  createFavorite: async function (idPets, idUser) {
  try{
    const user = await Users.findByPk(idUser);
    const pet =await Pets.findByPk(idPets)
    const existeFavorito = await FavoritesPets.findAll({
      where:{
        UserId:idUser,
        PetId:idPets}
    })
    if(existeFavorito.length>0) return `${pet.name} ya existe en la lista de favortitos de ${user.name}`
    const newFavorite = await FavoritesPets.create()
    await pet.addUser(user.id)
    await user.addPet(pet.id)
  return `La mascota ${pet.name} se agrego a favoritos`
  }
  catch{throw Error ("Fallo la coneccion con la base de datos")}
  }}
