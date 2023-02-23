const { Router } = require('express');
const { getFavorites} = require("../controlers/controllersFavorites/getFavorites")

const favoritesRoutes = Router();

favoritesRoutes.get('/:idUser',  async (req, res)=>{
    const {idUser}= req.params
    const {idPet} = req.body
   try{res.status(200).json( await getFavorites({idUser, idPet}))}
   catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = favoritesRoutes