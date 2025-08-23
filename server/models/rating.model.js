const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Rating = sequelize.define(
  "Rating",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    storeId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false },
    comment: { type: DataTypes.STRING },
  },
  { timestamps: true }
);


module.exports = Rating;
