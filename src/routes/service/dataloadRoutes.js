const { Router } = require("express");
const { Pets, Users, Provincias, Localidades } = require("../../db");
const {
  validateDataBase,
  examplePets,
  ejemplosUsers,
  ejemploLocalidades,
  ejemploProvincias,
} = require("./validateDataBase");
const dataload = Router();

dataload.get("/", validateDataBase, async (req, res) => {
  try {
    await Users.bulkCreate(ejemplosUsers);
    const petsExamples = examplePets.map(async (e) => {
      let newPet = await Pets.create(e);
      let user = await Users.findByPk(1);
      await user.addPets(newPet);
      return newPet;
    });

    // Aca cargo las provincias y las localidades correspondientes
    const Prov = await Provincias.bulkCreate(ejemploProvincias);
    const provincias = await Provincias.findAll();

    ejemploLocalidades.map((localidad, index) => {
      localidad.map(async (loc) => {
        const localidad = await Localidades.create({
          name: loc,
          ProvId: index + 1,
        });
      });
    });

    res.status(200).json("Se subieron datos de ejemplo en la base de datos");
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
});

module.exports = dataload;
