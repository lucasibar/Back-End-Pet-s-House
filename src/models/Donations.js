const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('Donations', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  money:{
    type: DataTypes.INTEGER
  }
})
}