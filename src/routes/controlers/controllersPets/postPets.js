const { Pets , Users } = require("../../../db");


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
  sex 
}) {
  const userId = req.params.idUser
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
    sex, 
    userId: userId,
  })
  await newPet.addUsers(userId);

    return `Se creo con exito ${name}`
}
}
 
