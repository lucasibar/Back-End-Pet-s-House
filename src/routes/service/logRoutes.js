const { Router } = require('express');
const { putUsers} = require("../controlers/controllersUsers/putUsers")
const { login} = require("../controlers/controllersUsers/login")
const { validateLogin} = require("../service/validateLogin")

const logRoutes = Router();
//Abrir sesion
logRoutes.put('/:idUser',  async (req, res)=>{
    const { idUser }= req.params 
   try{
       res.status(200).json( await login(idUser))}
   catch(error){res.status(400).json({Error: error.message})} 
})

//Cierra sesion
logRoutes.put('/:idUser', validateLogin,  async (req, res)=>{
    const { idUser }= req.params 
   try{
       res.status(200).json( await logof(idUser))}
   catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = logRoutes
