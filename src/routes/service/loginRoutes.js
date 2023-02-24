const { Router } = require('express');
const { login} = require("../controlers/controllersLogin/login")

const loginRoutes = Router();
//Abrir sesion
loginRoutes.put('/',  async (req, res)=>{
    const user = req.body.user
    const password = req.body.password

   try{
       res.status(200).json( await login(user, password))}
   catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = loginRoutes
