const { Reviews } = require("../../../db");

module.exports = {
  getReviews: async function () {
    try {
      const reviewsBDD = await Reviews.findAll();
      const reviewsJSON = reviewsBDD.map((el) => el.toJSON());
      return reviewsJSON;
    } catch {
      throw Error("Fallo la conexion con la base de datos");
    }
  },
};
