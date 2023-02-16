const { Pets } = require("../../db");

module.exports = {
getPets: async function () {

try{
  const petsBDD = await Pets.findAll();
  console.log(petsBDD)
  const petsJSON = petsBDD.map(el=>el.toJSON())
  return [petsJSON]
}
catch{throw Error ("Fallo la coneccion con la base de datos o la api")}

}}
