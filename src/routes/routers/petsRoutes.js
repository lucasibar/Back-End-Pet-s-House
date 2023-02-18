const { Router } = require('express');
const { Users } = require("../../db");
const { getPets} = require("../controlers/controllersPets/getPets")
const { getPetsByName} = require("../controlers/controllersPets/getPetsByName")
const { postPets} = require("../controlers/controllersPets/postPets")

const petsRoutes = Router();



const validateLogin = async (req, res, next) => {
    const { idUser }=  req.params
    
    const user = await Users.findOne({
        where:{
            id: idUser,
            logged: true
        }
    });
    // console.log(user)
    if(user.id && !user.logged){
        res.status(200).json( `Buenas ${user.name}, por favor ingrese su contraseña` )
    }
    else if (user === null) {
        res.status(200).json( "Por favor ingrese sus datos")
    } else {
        next()
    }
  }
  
//   const redirectHome = (req, res, next) => {
//     if(req.session.userId) {
//       res.redirect('/home');
//     } else {
//       next();
//     }
//   }  
  petsRoutes.get('/favorites/:idUser', validateLogin , async (req, res)=>{
    try{
    const datosForm = req.body
    res.status(200).json( await postPets(datosForm))}
    catch(error){res.status(400).json({Error: error.message})} 
})

// petsRoutes.get('/publications/:idUser', redirectLogin, async (req, res)=>{
//     try{
//     const datosForm = req.body
//     res.status(200).json( await postPets(datosForm))}
//     catch(error){res.status(400).json({Error: error.message})} 
// })










petsRoutes.get('/', async (req, res)=>{
    const { name } = req.query
    try{res.status(200).json(!name? await getPets() : await getPetsByName(name))}
    catch(error){res.status(400).json({Error: error.message})} 
})

petsRoutes.post('/', async (req, res)=>{
    try{
    const datosForm = req.body
    res.status(200).json( await postPets(datosForm))}
    catch(error){res.status(400).json({Error: error.message})} 
})








module.exports = petsRoutes