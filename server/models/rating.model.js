const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");
const Store = require("./store.model");


const Rating = sequelize.define("ratings", {
  rating: {
    type: DataTypes.INTEGER,  // Example: 1 to 5
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true
  },
  storeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true
  }
});

Rating.associate = (models) => {
  Rating.belongsTo(models.User, { foreignKey: "userId" });
  Rating.belongsTo(models.Store, { foreignKey: "storeId" });
};


module.exports = Rating;

