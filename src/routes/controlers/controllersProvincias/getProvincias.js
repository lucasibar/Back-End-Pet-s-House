const { Provincias } = require("../../../db");

module.exports = {
  getProvincias: async function () {
    try {
      const provincias = await Provincias.findAll();
      const provinciasJSON = provincias.map((el) => el.toJSON());
      return provinciasJSON;
    } catch {
      throw Error("Fallo la coneccion con la base de datos");
    }
  },
};
