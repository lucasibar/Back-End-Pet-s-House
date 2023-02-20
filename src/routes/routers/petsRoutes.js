const { Router } = require('express');
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

// petsRoutes.get('/favorites/:idUser', validateLogin, async (req, res)=>{
//     const { idPet } = req.query
//     try{
//     res.status(200).json( idPet? addFavorite(idPet): getFavorites())}
//     catch(error){res.status(400).json({Error: error.message})} 
// })


module.exports = petsRoutes
















//   const redirectHome = (req, res, next) => {
//     if(req.session.userId) {
//       res.redirect('/home');
//     } else {
//       next();
//     }
//   }  
