const { Pets, Users } = require("../../../db");


module.exports = { 
postPets: async function ({ 
  name, 
  image, 
  age, 
  description, 
  size, 
  animal, 
  healthBook, 
  province, 
  location, 
  sex,
  idUser
}) {
  
  const newPet = await Pets.create({ 
    name, 
    image, 
    age, 
    description, 
    size, 
    animal, 
    healthBook, 
    province, 
    location, 
    sex
  })
  const user = await Users.findByPk(idUser);
  await user.addPets(idUser)
 

    return `Se creo con exito ${name}`
}
}
 
