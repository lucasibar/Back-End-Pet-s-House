const { Router } = require('express');
const { getPublications} = require("../controlers/controllersPublications/getPublications")


const favoritesRoutes = Router();

favoritesRoutes.get('/:idUser',  async (req, res)=>{
    const {idUser }= req.params
   try{res.status(200).json( await getPublications(idUser))}
   catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = favoritesRoutes