const { Users, Pets, FavoritesPets } = require("../../../db");

module.exports = {
  deletFavorite: async function (idPets, idUser) {
  try{
    await FavoritesPets.destroy({
      where:{
        UserId:idUser,
        PetId:idPets}
    })
    return "Se elimino exitosamente la mascota de la lista de favoritos"
  }
  catch{throw Error ("Fallo la coneccion con la base de datos")}
  }}
