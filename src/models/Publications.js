const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('Publications', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  active:{
    type: DataTypes.BOOLEAN
  },
  date:{
    type: DataTypes.DATEONLY   
  }
})
}