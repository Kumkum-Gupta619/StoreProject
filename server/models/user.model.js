const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define("Users", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
<<<<<<< HEAD
  role: {
    type: DataTypes.STRING, allowNull: false, defaultValue: "User"
  }
},
  {
    timestamps: false,
  }
);
=======
  role: { type: DataTypes.ENUM("admin", "owner", "user"), defaultValue: "user" },
  address: { type: DataTypes.STRING },
  
});
>>>>>>> 9a2c97c32189df6d5e9c182749699919777a5233

module.exports = User;
