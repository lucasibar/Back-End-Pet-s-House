const { Router } = require('express');
const { getFavorites} = require("../controlers/controllersFavorites/getFavorites")
const { createFavorite} = require("../controlers/controllersFavorites/createFavorite")

const favoritesRoutes = Router();

favoritesRoutes.get('/:idUser',  async (req, res)=>{
    const {idUser }= req.params
   try{res.status(200).json( await getFavorites(idUser))}
   catch(error){res.status(400).json({Error: error.message})} 
})
favoritesRoutes.post('/',  async (req, res)=>{
    const {idPets, idUser } = req.body
   try{res.status(200).json( await createFavorite(idPets, idUser) )}
   catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = favoritesRoutes