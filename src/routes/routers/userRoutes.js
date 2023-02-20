const { Router } = require('express'); 
const { postUsers} = require("../controlers/controllersUsers/postUsers")
const { login} = require("../service/login")
const { validateLogin} = require("../service/validateLogin")

const userRoutes = Router();
//userRoutes.get('/:idAdmin', validacionAdmin, async (req, res)=>{
userRoutes.get('/', async (req, res)=>{
    try{res.status(200).json("Traeria todos los usuarios con su informacion")}
    catch(error){res.status(400).json({Error: error.message})} 
})
userRoutes.post('/',  async (req, res)=>{
    const newUsuario = req.body
    try{
        res.status(200).json( await postUsers(newUsuario))}
    catch(error){res.status(400).json({Error: error.message})} 
})

//Cierra sesion
userRoutes.put('/logOff/:idUser', validateLogin,  async (req, res)=>{
     const { idUser }= req.params 
    try{
        res.status(200).json( await login(idUser))}
    catch(error){res.status(400).json({Error: error.message})} 
})




module.exports = userRoutes