const { Router } = require('express');
const { Pets, Users } = require("../../db");

const precargaPetsRoutes = Router();

const ejemplos = [
        {
            name: "fido",
            image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
            age: 2,
            description:"muy tranquilofido. Es un perro muy grande pero re cariñoso",
            size: "grande",
            animal: "perro",
            healthBook:true,
            sex: "femenino",
            province: "BuenosAires",
            location: "SanFernando",
            zone:"",
            sex : ""
        },
        {
            name: "bugs bunny",
            image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
            age: 11,
            description:"re divertido",
            size: "chico",
            animal: "conejo",
            healthBook: false,
            sex: "masculino",
            province: "Cordoba",
            location: "Villa Warcalde",
            zone:"",
            sex : ""
        },
        {
            name: "manuelita",
            image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
            age: 20,
            description:"como come!! lenta la pobre pero se la aguanta",
            size: "chico",
            animal: "conejo",
            healthBook: false,
            sex: "masculino",
            province: "Mendoza",
            location: "La Cieneguita",
            zone:"",
            sex : ""
        },
        {
            name: "pepito",
            image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
            age: 8,
            description:"el mejor amigo del solitario",
            size: "chico",
            animal: "loro",
            healthBook: false,
            sex: "femenino",
            province: "San Luis",
            location: "Cerro de la Cruz",
            zone:"",
            sex : ""
        },
        {
            name: "Zamba",
            image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
            age: 8,
            description:"perra pitbul re buenita",
            size: "mediano",
            animal: "perro",
            healthBook: true,
            sex: "femenino",
            province: "Buenos Aires",
            location: "Vicente Lopez",
            zone:"",
            sex : ""
        }
    ]
const pet1 = [{
    name: "bugs bunny",
    image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
    age: 11,
    description:"re divertido",
    size: "chico",
    animal: "conejo",
    healthBook: false,
    sex: "masculino",
    province: "Cordoba",
    location: "Villa Warcalde",
    zone:"",
    sex : ""

}]

precargaPetsRoutes.get('/', async (req, res)=>{
    const dataValidation = await Pets.findAll()
    if(dataValidation.length === 0){
        console.log("hola aaaaaaaaaaaaaa")
        const promisearray = ejemplos.map( (e)=>
             Pets.create({
                name: e.name ,
                image: e.image,
                age: e.age,
                description: e.description,
                size: e.size,
                animal: e.email,
                healthBook: e.healthBook,
                sex: e.sex,
                province: e.province,
                location: e.location,
                zone: e.zone,
            })
        )
        return Promise.all(promisearray)

    }
    
})

module.exports= precargaPetsRoutes