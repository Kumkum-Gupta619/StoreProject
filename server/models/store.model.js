const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Store = sequelize.define(
  "Store",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING },
    storeImg: { type: DataTypes.STRING },
    ownerId: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.FLOAT, defaultValue: 0 }, // optional avg rating column
  },
  {
    timestamps: false,
  }
);


module.exports = Store;
