const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Store = sequelize.define("Store", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING },
  rating: { type: DataTypes.FLOAT, defaultValue: 1 },
  storeImg: { type: DataTypes.STRING, allowNull: true },
  ownerId: { type: DataTypes.INTEGER, allowNull: false }
}, {
  timestamps: false
});


module.exports = Store;


