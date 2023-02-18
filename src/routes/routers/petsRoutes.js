const { Router } = require('express');
const { getPets} = require("../controllersPets/getPets")
const { getPetsByName} = require("../controllersPets/getPetsByName")
const { postPets} = require("../controllersPets/postPets")

const petsRoutes = Router();

petsRoutes.get('/', async (req, res)=>{
    const { name } = req.query
    try{res.status(200).json(!name? await getPets() : await getPetsByName(name))}
    catch(error){res.status(400).json({Error: error.message})} 
})

petsRoutes.post('/', async (req, res)=>{
    try{
    const datosForm = req.body
    res.status(200).json( await postPets(datosForm))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = petsRoutes