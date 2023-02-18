const { Router } = require('express'); 
const { postUsers} = require("../controllersUsers/postUsers")
const { putUsers} = require("../controllersUsers/putUsers")

const userRoutes = Router();

//Crear sesion
userRoutes.post('/logIn', async (req, res)=>{
    const newUsuario = req.body
    try{
        res.status(200).json( await postUsers(newUsuario))}
    catch(error){res.status(400).json({Error: error.message})} 
})
//Cierra sesion
userRoutes.put('/logOff/:usuarioID', async (req, res)=>{
     const { usuarioID }= req.params 
    try{
        res.status(200).json( await putUsers(usuarioID))}
    catch(error){res.status(400).json({Error: error.message})} 
})

userRoutes.get('/', async (req, res)=>{
    try{res.status(200).json("Traeria todos los usuarios con su informacion")}
    catch(error){res.status(400).json({Error: error.message})} 
})

userRoutes.get('/favoritos', async (req, res)=>{
    
    try{res.status(200).json()}
    
    catch(error){res.status(400).json({Error: error.message})} 
})


userRoutes.get('/publicaciones', async (req, res)=>{
    
    try{res.status(200).json()}
    
    catch(error){res.status(400).json({Error: error.message})} 
})




module.exports = userRoutes