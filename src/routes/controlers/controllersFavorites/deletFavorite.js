const { Users, Pets } = require("../../../db");

module.exports = {
  deletFavorite: async function (idPets, idUser) {
    try {
      const User = await Users.findByPk(idUser);
      const Pet = await Pets.findByPk(idPets);

      await Pet.removeUser(User);

      return "Se elimino exitosamente la mascota de la lista de favoritos";
    } catch {
      throw Error("Fallo la conexion con la base de datos");
    }
  },
};
