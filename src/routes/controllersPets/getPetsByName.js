const { Pets } = require("../../db");

module.exports = {
getPetsByName: async function (name) {
try{
  const searchPetByName = await Pets.findAll({
    where:{
        name
    }
  });
  return searchPetByName
}
catch{throw Error (`No se encontro ninguna mascota con el nombre ${name}`)}

}}
