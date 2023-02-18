const { Pets, User } = require("../../db");


module.exports = { 
postPets: async function ({ urerID, name, image, age, description, size, animal, healthBook, province, location, zone, sex
}) {
  const newPet = await Pets.create({ name, image, age, description, size, animal, healthBook, province, location, zone, sex})
  
  
  return `Se creo con exito ${name}`
}
}
 
