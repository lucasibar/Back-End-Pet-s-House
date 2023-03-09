const { Pets } = require("../../../db");
const { Op } = require("sequelize")

module.exports = {
getPetsByName: async function (name) {
try{
  console.log("name: ", name)
  const searchPetByName = await Pets.findAll({where: {name : { [Op.iLike]: `%${name}%`}}})
  return searchPetByName
}
catch{throw Error (`No se encontro ninguna mascota con el nombre ${name}`)}

}}
