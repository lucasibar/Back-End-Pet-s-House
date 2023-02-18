const { Pets } = require("../../../db");


module.exports = { 
postPets: async function ({ name, image, age, description, size, animal, healthBook, province, location, zone, sex
}) {
  const newPet = await Pets.create({ name, image, age, description, size, animal, healthBook, province, location, zone, sex})
  return `Se creo con exito ${name}`
}
}
 
