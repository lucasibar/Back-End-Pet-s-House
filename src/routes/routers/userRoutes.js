const { Router } = require('express'); 
const { getUsers} = require("../controlers/controllersUsers/getUsers")
const { getUsersByEmail} = require("../controlers/controllersUsers/getUsersByEmail")
const { postUsers} = require("../controlers/controllersUsers/postUsers")
const { userChanger} = require("../controlers/controllersUsers/userChanger")
const { login} = require("../controlers/controllersLogin/login")
const userRoutes = Router();
//userRoutes.get('/:idAdmin', validacionAdmin, async (req, res)=>{


userRoutes.get('/', async (req, res)=>{
    const { email } = req.body
    try{
    res.status(200).json(email? await getUsersByEmail(email) :await getUsers())}
    catch(error){res.status(400).json("No se encontro ningun usuario cargado en la base de datos")} 
})

userRoutes.post('/',  async (req, res)=>{
    const newUsuario = req.body
    try{res.status(200).json( await postUsers(newUsuario))}
    catch(error){res.status(400).json({Error: error.message})} 
})

userRoutes.put('/',  async (req, res)=>{
    const userChangeProperties = req.body
    try{res.status(200).json( await userChanger(userChangeProperties))}
    catch(error){res.status(400).json({Error: error.message})} 
})

userRoutes.get('/login',  async (req, res)=>{
    const email = req.body.email
    const password = req.body.password
   try{res.status(200).json( await login({email, password}))}
   catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = userRoutes