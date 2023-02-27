const { FavoritesPets, Pets  } = require("../../../db");

module.exports = {
getFavorites: async function (idUser) {
  try{
    const favoritesBDD = await FavoritesPets.findAll({
      where:{UserId: idUser}});
     const arrayPets =  favoritesBDD.map(async (e)=>{
       let petsInfo= await Pets.findOne({
         where:{id: e.PetId}
        })
        return petsInfo.toJSON()
      })
      const petsFavoritesInfo = await Promise.all(arrayPets)
      return petsFavoritesInfo
  }catch{throw Error ("Fallo la coneccion con la base de datos")}
}}
    