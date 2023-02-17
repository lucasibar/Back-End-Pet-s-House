const { Router } = require('express');
const { Pets, User } = require("../db");
const petsRoutes = require ('./petsRoutes')
var morgan = require('morgan')

     

const router = Router();
router.use(morgan('tiny'))


const ejemplo = [
    {
        id:1,
        name: "fido",
        image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        age: 2,
        description:"muy tranquilofido. Es un perro muy grande pero re cariñoso",
        size: "grande",
        animal: "perro",
        healthBook:true,
        userID:"1",
        sex: "femenino",
        province: "BuenosAires",
        location: "SanFernando",
        zone:""
    },
    {
        id:2,
        name: "bugs bunny",
        image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        age: 11,
        description:"re divertido",
        size: "chico",
        animal: "conejo",
        healthBook: false,
        userID:"2",
        sex: "masculino",
        province: "Cordoba",
        location: "Villa Warcalde",
        zone:""
    },
    {
        id:3,
        name: "manuelita",
        image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        age: 20,
        description:"como come!! lenta la pobre pero se la aguanta",
        size: "chico",
        animal: "conejo",
        healthBook: false,
        userID:"2",
        sex: "masculino",
        province: "Mendoza",
        location: "La Cieneguita",
        zone:""
    },
    {
        id:4,
        name: "pepito",
        image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        age: 8,
        description:"el mejor amigo del solitario",
        size: "chico",
        animal: "loro",
        healthBook: false,
        userID:"2",
        sex: "femenino",
        province: "San Luis",
        location: "Cerro de la Cruz",
        zone:""
    },
    {
        id:5,
        name: "Zamba",
        image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        age: 8,
        description:"perra pitbul re buenita",
        size: "mediano",
        animal: "perro",
        healthBook: true,
        userID:"2",
        sex: "femenino",
        province: "Buenos Aires",
        location: "Vicente Lopez",
        zone:""
    }
]

router.use((req, res, next) => {
    console.log("HASTA ACA LEGUEEEEEEEEEEE")
    const promises = []
    ejemplo.forEach(e => {
    const newPet = Pets.create({ 
        name: e.name, 
        image: e.image, 
        age: e.age, 
        description: e.description, 
        size: e.size, 
        animal: e.animal, 
        healthBook: e.healthBook, 
        province: e.province, 
        location: e.location, 
        zone: e.zone, 
        sex: e.sex
    })
    newPet.addUser(e.userID)
    promises.push(newPet)
  })
  Promise.all(promises)

    next();
  });

  router.use('/pets', petsRoutes)



module.exports = router;
