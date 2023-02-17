const { Pets } = require("../../db");


module.exports = { 
postPets: async function ({ name, image, age, description, weight, animalType, healthBook, provincia, localidad, zona}) {
  const newRaza = await Raza.create({ name, image, age, description, weight, animalType, healthBook});
  const respuesta= `Se creo con exito la raza ${name}` 
  return respuesta
}
}
 
