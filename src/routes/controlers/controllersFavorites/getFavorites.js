const { Users, Pets } = require("../../../db");

module.exports = {
  getFavorites: async function (data) {
const { idUser, idPet }= data
  try{
    if(idPet){
      const userId = await Users.findByPk(idUser)
      const petId = await Users.findByPk(idPet)
      //userId.addPet(petId)
      console.log(userId.toJSON())
      //await userId.addPets(petId, { through: { UserId:idUser} });
      console.log('pase')
    }

//     const favorites = await Pets.findall({ 
//       include: {
//              model: User,
//              through: {
//                UserId: []
//              }
//  } })
    // const pet1 = await  Pets.findByPk()
    // const pett1 = pet1.toJSON()
    // console.log(pett1)
    // await userExample.setPet(pet1.id)

return "respuesta"
}
catch{throw Error ("Fallo la coneccion con la base de datos")}
}}
