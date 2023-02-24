const { Router } = require('express');
const { getPets} = require("../controlers/controllersPets/getPets")
const { getPetsByName} = require("../controlers/controllersPets/getPetsByName")
const { getPetsById} = require("../controlers/controllersPets/getPetsById")
const { postPets} = require("../controlers/controllersPets/postPets")

const petsRoutes = Router();
petsRoutes.get('/', async (req, res)=>{
    const { name } = req.query
    try{
    res.status(200).json(name? await getPetsByName(name): await getPets())}
    catch(error){res.status(400).json({Error: error.message})} 
})
petsRoutes.get('/:idPet', async (req, res)=>{
    const {idPet} = req.params
    try{
        const pet = await getPetsById(idPet)
    res.status(200).json(pet)}
    catch(error){res.status(400).json({Error: error.message})} 
})
petsRoutes.post('/', async (req, res)=>{
    try{
    const datosForm  = req.body
    res.status(200).json( await postPets(datosForm))}
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
