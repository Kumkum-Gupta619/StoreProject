const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");
const Store = require("./store.model");

const Rating = sequelize.define("Rating", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
});

// Relations
User.hasMany(Rating);
Rating.belongsTo(User);
Store.hasMany(Rating);
Rating.belongsTo(Store);

module.exports = Rating;
