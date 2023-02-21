const { Pets, Users } = require("../../db");
const { getPets } = require("../controlers/controllersPets/getPets");
const { getUsers } = require("../controlers/controllersUsers/getUsers");

const validateDataBase = async (req, res, next) => {
  const pets = await getPets();
  const users = await getUsers();
  if (pets.length > 0 || users.length > 0) {
    return res.status(200).json("YA HAY SE CARGARON DATOS EN LA BASE DE DATOS");
  }
  next();
};
const ejemplosPets = [
  {
    name: "fido",
    age: 2,
    description: "muy tranquilofido. Es un perro muy grande pero re cariñoso",
    size: "grande",
    animal: "perro",
    healthBook: true,
    sex: "femenino",
    province: "BuenosAires",
    location: "SanFernando",
  },
  {
    name: "bugs bunny",
    age: 11,
    description: "re divertido",
    size: "chico",
    animal: "conejo",
    healthBook: false,
    sex: "masculino",
    province: "Cordoba",
    location: "Villa Warcalde",
  },
  {
    name: "manuelita",
    age: 20,
    description: "como come!! lenta la pobre pero se la aguanta",
    size: "chico",
    animal: "conejo",
    healthBook: false,
    sex: "masculino",
    province: "Mendoza",
    location: "La Cieneguita",
  },
  {
    name: "pepito",

    age: 8,
    description: "el mejor amigo del solitario",
    size: "chico",
    animal: "loro",
    healthBook: false,
    sex: "femenino",
    province: "San Luis",
    location: "Cerro de la Cruz",
    active: "false",
  },
];
const ejemplosUsers = [
  {
    name: "felipe",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    email: "pepe@gmail.com",
    password: 12343,
    rol: "usuario",
    logged: false,
  },
  {
    name: "pepita",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    email: "pepe@gmail.com",
    password: 12343,
    rol: "administrador",
    logged: false,
  },
];

module.exports = { validateDataBase, ejemplosPets, ejemplosUsers };
