const { Pets, Users } = require("../../../db");

module.exports = {
  getPetsById: async function (idPet) {
try{
  const searchPetByName = await Pets.findOne({
    where:{
      id : idPet
    }, 
    includes:Users
  });
if(searchPetByName.active===false) return 'Esta mascota ya no esta disponible'
 const userDB = await Users.findByPk(searchPetByName.UserId)
  return {
    User: userDB,
    Pet: searchPetByName
  }
}
catch{throw Error (`No se encontro ninguna mascota de numero de identificacion ${idPet}`)}

}}
