const { Users } = require("../../db");


module.exports = {
validateLogin: async (req, res, next) => {
    const userId = req.params.idUser
    const user = await Users.findAll({
        where:{
            id: userId
        }
    }).then(data => data[0].toJSON())
  
    
    if(user.logged){
        
    next()
    }
    else{
        res.status(200).json("Por favor ingresa tu usuario y contraseña para continuar")
    }
}
}
    

