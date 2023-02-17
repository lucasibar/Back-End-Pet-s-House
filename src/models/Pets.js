const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('Pets', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: 'https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg',
  }, 
  age: {
    type: DataTypes.INTEGER 
  },
  description: {
    type: DataTypes.STRING
  },
  size:{
    type: DataTypes.INTEGER
  },
  healthBook:{
    type: DataTypes.BOOLEAN
  },
  animal:{
    type: DataTypes.STRING
  },
  active:{
    type: DataTypes.BOOLEAN
  },
  date:{
    type: DataTypes.DATEONLY
  }, 
  province:{
    type: DataTypes.STRING
  },
  location:{
    type: DataTypes.STRING
  },
  zone:{
    type: DataTypes.STRING
  },
  sex:{
    type: DataTypes.ENUM(masculino, femenino)
  }
});
};


