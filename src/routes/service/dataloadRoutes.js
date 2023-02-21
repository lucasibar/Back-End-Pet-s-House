const { Router } = require('express');
const { Pets, Users } = require("../../db");
const { getPets } = require("../controlers/controllersPets/getPets");
const { getUsers } = require("../controlers/controllersUsers/getUsers");
const {validateDataBase, ejemplosPets, ejemplosUsers} = require("./validateDataBase")
const dataload = Router();

dataload.get('/', validateDataBase, async (req, res)=>{
    try{
        await Pets.bulkCreate(ejemplosPets)
        await Users.bulkCreate(ejemplosUsers)
        const pets = await getPets()
        const users = await getUsers()
        res.status(200).json("Se subieron datos de ejemplo en la base de datos")
    }
    catch(error){res.status(400).json({Error: error.message})} 
})

module.exports= dataload