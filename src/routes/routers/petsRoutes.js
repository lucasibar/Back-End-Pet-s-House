const { Router } = require('express');
const { Users } = require("../../db");
const { getPets} = require("../controlers/controllersPets/getPets")
const { getPetsByName} = require("../controlers/controllersPets/getPetsByName")
const { postPets} = require("../controlers/controllersPets/postPets")
const { validateLogin} = require("../service/validateLogin")

const petsRoutes = Router();




//RUTAS
petsRoutes.get('/', async (req, res)=>{
    const { name } = req.query
    try{
    res.status(200).json(name? await getPetsByName(name): await getPets())}
    catch(error){res.status(400).json({Error: error.message})} 
})

petsRoutes.post('/:idUser', validateLogin,  async (req, res)=>{
    try{
    const datosForm  = req.body
    res.status(200).json( await postPets(datosForm))}
    catch(error){res.status(400).json({Error: error.message})} 
})

petsRoutes.get('/favorites/:idUser', validateLogin, async (req, res)=>{
    try{
    res.status(200).json( "LISTA DE FAVORITOS EN TRABAJO")}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = petsRoutes
















//   const redirectHome = (req, res, next) => {
//     if(req.session.userId) {
//       res.redirect('/home');
//     } else {
//       next();
//     }
//   }  
