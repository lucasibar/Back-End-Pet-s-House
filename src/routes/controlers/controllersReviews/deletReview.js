const { Reviews } = require("../../../db");

module.exports = {
  deletReview: async function (idReviews, idUser) {
    try {
      await Reviews.destroy({
        where: {
          UserId: idUser,
          PetIdid: idReviews,
        },
      });

      return "Se elimino exitosamente la mascota de la lista de favoritos";
    } catch {
      throw Error("Fallo la conexion con la base de datos");
    }
  },
};
