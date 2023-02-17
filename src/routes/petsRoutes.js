const { Router } = require('express');
const { getPets} = require("./controllers/getPets")
const { postPets} = require("./controllers/postPets")
// const { getByName} = require("./controllers/##getByName")
// const { getById} = require("./controllers/##getById")

const petsRoutes = Router();

petsRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getPets())}
    catch(error){res.status(400).json({Error: error.message})} 
})
petsRoutes.post('/',async (req, res)=>{
    try{
    const datosForm = req.body
    res.status(200).json( await postPets(datosForm))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = petsRoutes