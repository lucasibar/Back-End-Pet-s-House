const { Pets, User } = require("../../db");


module.exports = { 
postPets: async function ({ userID, name, image, age, description, size, animal, healthBook, province, location, zone, sex
}) {
  const newPet = await Pets.create({ name, image, age, description, size, animal, healthBook, province, location, zone, sex})
  //newPet.addUser(userID)
  
  return `Se creo con exito la raza ${name}`
}
}
 
