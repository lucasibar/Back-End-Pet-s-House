const { Router } = require('express');
const { logof} = require("../controlers/controllersLogin/logof")

const logofRoutes = Router();
//Cierra sesion
logofRoutes.put('/:idUser',  async (req, res)=>{
    const { idUser }= req.params 
   try{
       res.status(200).json( await logof(idUser))}
   catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = logofRoutes
