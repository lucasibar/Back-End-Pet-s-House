const { Pets } = require("../../../db");


module.exports = { 
  petChanger: async function (petChangeProperties){
    let { idPet } = petChangeProperties
  const newPet = await Pets.update(petChangeProperties, {
    where:{id:idPet}
  })
  const pet= Pets.findAll({
    where:{id:idPet}
  })

  return pet
}
}
 



