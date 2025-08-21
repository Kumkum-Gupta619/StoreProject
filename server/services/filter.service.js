const { User, Store } = require("../models");
const { Op } = require("sequelize");

// Search users by name/email
exports.searchUsers = async (query) => {
  try {
    return await User.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
      attributes: ["id", "name", "email", "role", "address"],
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

// Search stores by name/address
exports.searchStores = async (query) => {
  try {
    return await Store.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { address: { [Op.iLike]: `%${query}%` } },
        ],
      },
      attributes: ["id", "name", "address", "rating"],
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
