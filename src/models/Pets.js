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
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
