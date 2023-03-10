const { Router } = require('express'); 
const { getUsers} = require("../controlers/controllersUsers/getUsers")
const { getUsersByEmail} = require("../controlers/controllersUsers/getUsersByEmail")
const { postUsers} = require("../controlers/controllersUsers/postUsers")
const { postUsersAuth0} = require("../controlers/controllersUsers/postUsersAuth0")
const { userChanger} = require("../controlers/controllersUsers/userChanger")
const { login} = require("../controlers/controllersLogin/login")
const userRoutes = Router();
//userRoutes.get('/:idAdmin', validacionAdmin, async (req, res)=>{

userRoutes.get('/:email', async (req, res)=>{
    const { email } = req.params
    try{
    res.status(200).json(await getUsersByEmail(email))}
    catch(error){res.status(400).json({Error: error.message})} 
})
userRoutes.post('/userAuth0',  async (req, res)=>{
    const { name, image, email } = req.body
    try{res.status(200).json( await postUsersAuth0(name, image, email))}
    catch(error){res.status(400).json({Error: error.message})} 
})
userRoutes.put('/',  async (req, res)=>{
    const userChangeProperties = req.body
    try{res.status(200).json( await userChanger(userChangeProperties))}
    catch(error){res.status(400).json({Error: error.message})} 
})
userRoutes.post('/login',  async (req, res)=>{
    const {email, password} = req.body
    try{res.status(200).json( await login(email, password))}
    catch(error){res.status(400).json({Error: error.message})} 
})
userRoutes.get('/', async (req, res)=>{
    try{
    res.status(200).json(await getUsers())}
    catch(error){res.status(400).json("No se encontro ningun usuario cargado en la base de datos")} 
})
userRoutes.post('/',  async (req, res)=>{
    const newUsuario = req.body
    try{res.status(200).json( await postUsers(newUsuario))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = userRoutes