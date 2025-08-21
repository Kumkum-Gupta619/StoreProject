const { User, Store, Rating } = require("../models");
const { Sequelize } = require("sequelize");

exports.getDashboardStats = async () => {
  try {
    const totalUsers = await User.count();
    const totalStores = await Store.count();
    const totalRatings = await Rating.count();

    // average rating per store
    const avgRatings = await Rating.findAll({
      attributes: [
        "storeId",
        [Sequelize.fn("AVG", Sequelize.col("rating")), "avgRating"],
        [Sequelize.fn("COUNT", Sequelize.col("id")), "ratingCount"],
      ],
      group: ["storeId"],
    });

    return {
      totalUsers,
      totalStores,
      totalRatings,
      avgRatings,
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
