const { Reviews, Users } = require("../../../db");


module.exports = { 
  postReview: async function (idUser, comentario, estrellas){
  const newReview = await Reviews.create({ comentario, estrellas})
  const user = await Users.findByPk(idUser);
  await user.addPets(newReview.id)
    return `Se creo con exito ${name}`
}
}
 
