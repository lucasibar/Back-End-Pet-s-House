require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/petshouse`, {
  logging: false,
  native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Users , Pets, Donations } = sequelize.models;

//Cada usuario va a poder darle con el boton adoptar a varias mascotas 
//y una mascota va a poder ser pedida por varios usuarios hasta que se 
//se decida el publicante por uno de los aplicantes
// Users.belongsToMany(Pets, { through: "UsersPets" });
// Pets.belongsToMany(Users, { through: "UsersPets" });

//Cada pet va a ser creado por un solo usuario, y el usuario puede publicar varias mascotas
Users.hasMany(Pets)
Pets.belongsTo(Users)

const FavoritesPets = sequelize.define('FavoritesPets', {}, { timestamps: false });
Users.belongsToMany(Pets, { through: "FavoritesPets" });
Pets.belongsToMany(Users, { through: "FavoritesPets" });


Users.hasMany(Donations)
Donations.belongsTo(Users)


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
