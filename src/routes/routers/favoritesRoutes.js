const { Router } = require('express');
const { getFavorites} = require("../controlers/controllersFavorites/getFavorites")
const { createFavorite} = require("../controlers/controllersFavorites/createFavorite")

const favoritesRoutes = Router();

favoritesRoutes.get('/:idUser',  async (req, res)=>{
    const {idUser }= req.params
   try{res.status(200).json( await getFavorites({idUser, idPet}))}
   catch(error){res.status(400).json({Error: error.message})} 
})
favoritesRoutes.post('/',  async (req, res)=>{
    const {idPets, idUser } = req.body
    const respuesta = await createFavorite(idPets, idUser)
   try{res.status(200).json( respuesta)}
   catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = favoritesRoutes