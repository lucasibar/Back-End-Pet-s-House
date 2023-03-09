const { Reviews, Users } = require("../../../db");

module.exports = {
  getReviews: async function () {
    try {
      const reviewsBDD = await Reviews.findAll({ include: Users });
      const reviewsJSON = reviewsBDD.map((el) => el.toJSON());
      return reviewsJSON;
    } catch {
      throw Error("Fallo la conexion con la base de datos");
    }
  },
};
