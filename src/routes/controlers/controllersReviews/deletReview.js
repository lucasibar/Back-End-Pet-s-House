const { Reviews } = require("../../../db");

module.exports = {
  deletReview: async function (idReviews) {
    try {
      await Reviews.destroy({
        where: {
          id: idReviews,
        },
      });
      return "Se elimino exitosamente la mascota de la lista de favoritos";
    } catch {
      throw Error("Fallo la conexion con la base de datos");
    }
  },
};
