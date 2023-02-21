const { Router } = require('express'); 
const { getUsers} = require("../controlers/controllersUsers/getUsers")
const { postUsers} = require("../controlers/controllersUsers/postUsers")

const userRoutes = Router();
//userRoutes.get('/:idAdmin', validacionAdmin, async (req, res)=>{


userRoutes.get('/', async (req, res)=>{
    try{
    res.status(200).json(await getUsers())}
    catch(error){res.status(400).json("No se encontro ningun usuario cargado en la base de datos")} 
})


userRoutes.post('/',  async (req, res)=>{
    const newUsuario = req.body
    try{
        res.status(200).json( await postUsers(newUsuario))}
    catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = userRoutes