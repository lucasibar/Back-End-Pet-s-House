const { Pets, Users } = require("../../../db");


module.exports = { 
postPets: async function ({name, image, age, description, size, animal, healthBook, province, location, sex,idUser}){
  const newPet = await Pets.create({ 
  name, image, age, description, size, animal, healthBook, province, location, sex
  })
  const user = await Users.findByPk(idUser);
  console.log(newPet.id)
  await user.addPets(newPet.id)
    return `Se creo con exito ${name}`
}
}
 
