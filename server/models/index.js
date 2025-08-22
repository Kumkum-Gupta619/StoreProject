const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

const User = require("./user.model");
const Store = require("./store.model");
const Rating = require("./rating.model");

// Associations
User.hasMany(Store, { foreignKey: "ownerId", as: "stores" });
Store.belongsTo(User, { foreignKey: "ownerId", as: "owner" });

Store.hasMany(Rating, { foreignKey: "storeId", as: "ratings" });
Rating.belongsTo(Store, { foreignKey: "storeId", as: "store" });

User.hasMany(Rating, { foreignKey: "userId", as: "userRatings" });
Rating.belongsTo(User, { foreignKey: "userId", as: "user" });

const db = { sequelize, Sequelize, User, Store, Rating };

module.exports = db;
