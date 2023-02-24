const { FavoritesPets  } = require("../../../db");

module.exports = {
getFavorites: async function (idUser) {
  try{
    const favoritesBDD = await FavoritesPets.findAll({
      where:{UserId: idUser}});
    return favoritesBDD
  }catch{throw Error ("Fallo la coneccion con la base de datos")}
}}
    