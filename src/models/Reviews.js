const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Reviews",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      comentario: {
        type: DataTypes.STRING
      },
      estrellas: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: false,
    }
  );
};
