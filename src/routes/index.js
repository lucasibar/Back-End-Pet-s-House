const { Router } = require('express');
const petsRoutes = require ('./routers/petsRoutes')
const userRoutes = require ('./routers/userRoutes')
const precargaPetsRoutes = require ('./routers/precargaPetsRoutes')
const logRoutes = require ('./service/logRoutes')
//const administrationRoutes = require ('./routers/administrationRoutes')
var morgan = require('morgan')

const router = Router();
router.use(morgan('tiny'))

// const ejemplos = [
//     {
//         id:1,
//         name: "fido",
//         image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
//         age: 2,
//         description:"muy tranquilofido. Es un perro muy grande pero re cariñoso",
//         size: "grande",
//         animal: "perro",
//         healthBook:true,
//         userID:"1",
//         sex: "femenino",
//         province: "BuenosAires",
//         location: "SanFernando",
//         zone:""
//     },
//     {
//         id:2,
//         name: "bugs bunny",
//         image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
//         age: 11,
//         description:"re divertido",
//         size: "chico",
//         animal: "conejo",
//         healthBook: false,
//         userID:"2",
//         sex: "masculino",
//         province: "Cordoba",
//         location: "Villa Warcalde",
//         zone:""
//     },
//     {
//         id:3,
//         name: "manuelita",
//         image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
//         age: 20,
//         description:"como come!! lenta la pobre pero se la aguanta",
//         size: "chico",
//         animal: "conejo",
//         healthBook: false,
//         userID:"2",
//         sex: "masculino",
//         province: "Mendoza",
//         location: "La Cieneguita",
//         zone:""
//     },
//     {
//         id:4,
//         name: "pepito",
//         image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
//         age: 8,
//         description:"el mejor amigo del solitario",
//         size: "chico",
//         animal: "loro",
//         healthBook: false,
//         userID:"2",
//         sex: "femenino",
//         province: "San Luis",
//         location: "Cerro de la Cruz",
//         zone:""
//     },
//     {
//         id:5,
//         name: "Zamba",
//         image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
//         age: 8,
//         description:"perra pitbul re buenita",
//         size: "mediano",
//         animal: "perro",
//         healthBook: true,
//         userID:"2",
//         sex: "femenino",
//         province: "Buenos Aires",
//         location: "Vicente Lopez",
//         zone:""
//     }
// ]
// let subirEjemplosBDD = async () => {
//     setTimeout(loadings, 1000);
  
//     function loadings() {
//       ejemplos.map((e) => {
//         Pets.findOrCreate({
//             where:{
//                 id: e.id
//             }
//         });
//       });
//       console.log("Diets loadings");
//     }
//   };
  
// subirEjemplosBDD();
router.use('/precarga', precargaPetsRoutes)
router.use('/login', logRoutes)

router.use('/users', userRoutes)

router.use('/pets', petsRoutes)


//router.use('/administration', administrationRoutes)

module.exports = router;
