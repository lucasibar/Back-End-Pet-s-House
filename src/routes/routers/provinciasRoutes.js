const { Router } = require("express");
const { Provincias, Localidades } = require("../../db");

const provinciasRoutes = Router();

provinciasRoutes.get("/", async (req, res) => {
  try {
    const { localidad } = req.query;
    let respuesta;
    if (!localidad) {
      respuesta = await Provincias.findAll();
    } else {
      respuesta = await Localidades.findAll({
        where: {
          ProvId: localidad,
        },
      });
    }
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = provinciasRoutes;
