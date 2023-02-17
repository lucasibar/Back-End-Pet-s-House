const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('Favorites', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  }
})
}