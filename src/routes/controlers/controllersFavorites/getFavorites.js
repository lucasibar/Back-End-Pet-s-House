const { Pets, Users } = require("../../../db");

module.exports = {
  getFavorites: async function (idUser) {
    try {
      const User = await Users.findByPk(idUser, {
        include: {
          model: Pets,
        },
      });

      return User;
    } catch {
      throw Error("Fallo la coneccion con la base de datos");
    }
  },
};
