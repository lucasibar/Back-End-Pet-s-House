const { Users } = require("../../../db");


module.exports = { 
  postUsersAuth0: async function (name, image, email){
    const [user, created] = await Users.findOrCreate({
      where:{
        email:email
      }
    })
    if(!user.image){
      const agregarImagenGoogle = await Users.update({image: image}, {
        where:{email:email}
      })
    }
    if(!user.name){
      const agregarNameGoogle = await Users.update({name: name}, {
        where:{email:email}
      })
    }
const respuesta = await Users.findOne({
  where:{
    email:email
  }
})
    return respuesta

}
}
 



