const { getPets } = require("../controlers/controllersPets/getPets");
const { getUsers } = require("../controlers/controllersUsers/getUsers");

const validateDataBase = async (req, res, next)=>{
        const pets = await getPets()
        const users = await getUsers()

        if(pets.length>0 || users.length>0){
          return res.status(200).json("YA HAY SE CARGARON DATOS EN LA BASE DE DATOS")
        }
        next()
    }
const examplePets =[
    {
        name: "fido",
        age: 2,
        description:"muy tranquilofido. Es un perro muy grande pero re cariñoso",
        image:'https://res.cloudinary.com/dg80wnkdc/image/upload/v1677500837/PFimages/razas-de-perro-toy-t.jpg_po2qpi.webp',
        size: "grande",
        animal: "perros",
        healthBook:true,
        sex: "femenino",
        province: "BuenosAires",
        location: "SanFernando",

    },
    {

        name: "bugs bunny",
        age: 11,
        description:"re divertido",        
        image:'https://res.cloudinary.com/dg80wnkdc/image/upload/v1677500846/PFimages/razas_de_conejos_enanos_o_toy_24086_600_square_r1nbzv.jpg',
        size: "pequeño",
        animal: "roedores",
        healthBook: false,
        sex: "masculino",
        province: "Cordoba",
        location: "Villa Warcalde",

    },
    {
        name: "manuelita",
        age: 20,
        description:"como come!! lenta la pobre pero se la aguanta",
        image:'https://res.cloudinary.com/dg80wnkdc/image/upload/v1677500851/PFimages/la_tortuga_como_mascota_24473_orig_b0iuv6.jpg',
        size: "pequeño",
        animal: "roedores",
        healthBook: false,
        sex: "masculino",
        province: "Mendoza",
        location: "La Cieneguita",

    },
    {
        name: "pepito",
        age: 8,
        description:"el mejor amigo del solitario",
        size: "pequeño",
        animal: "aves",
        healthBook: false,
        sex: "femenino",
        province: "San Luis",
        location: "Cerro de la Cruz",
        active:"false",

    }
]
const ejemplosUsers =[    
{
    name:"felipe",
    image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    email:"pepe@gmail.com",
    password: 12343,
    rol: "usuario",
    logged:false
},{
    name:"pepita",
    image:"",
    email:"lucas@gmail.com",
    password: 12345,
    rol: "administrador",
    logged:false
}
]

    

module.exports = { validateDataBase, examplePets, ejemplosUsers }
