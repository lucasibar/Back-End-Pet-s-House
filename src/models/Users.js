const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    rol:{
      type: DataTypes.ENUM("usuario", "administrador"),
      defaultValue: "usuario",
    }
},
{
timestamps: true,
createdAt: true,
updatedAt: true
});
};
