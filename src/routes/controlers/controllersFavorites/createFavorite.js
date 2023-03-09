const { Users, Pets } = require("../../../db");

module.exports = {
  createFavorite: async function (idPets, idUser) {
    try {
      const User = await Users.findByPk(idUser);
      const Pet = await Pets.findByPk(idPets);

      await Pet.addUser(User);

      return "llegue";
    } catch {
      throw Error("Fallo la coneccion con la base de datos");
    }
  },
};
