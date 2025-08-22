const Store = require("../models/store.model");
const Rating = require("../models/rating.model");
const User = require("../models/user.model")
const { Sequelize } = require("sequelize");
exports.getAllStores = async (req, res) => {
  try {
    const stores = await Store.findAll({
      attributes: {
        include: [
          [
            Sequelize.fn("AVG", Sequelize.col("ratings.rating")), // use correct alias
            "averageRating",
          ],
        ],
      },
      include: [
        {
          model: Rating,
          as: "ratings", // ✅ must match the alias in Store.hasMany
          attributes: [],
        },
        {
          model: User,
          as: "owner", // matches Store.belongsTo(User, { as: "owner" })
          attributes: ["id", "name", "email"],
        },
      ],
      group: ["Store.id", "owner.id"],
    });

    res.json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};




exports.getStoreById = async (req, res) => {
  try {
    const { id } = req.params;

    const store = await Store.findOne({
      where: { id },
      include: [
        {
          model: User,
          as: "owner",
          attributes: ["id", "name", "email"],
        },
        {
          model: Rating,
          as: "ratings",
          attributes: ["rating"],
        },
      ],
    });

    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    const totalRatings = store.ratings.length;
    const avgRating =
      totalRatings > 0
        ? (
          store.ratings.reduce((sum, r) => sum + r.rating, 0) / totalRatings
        ).toFixed(1)
        : null;

    return res.json({
      success: true,
      store: {
        id: store.id,
        name: store.name,
        address: store.address,
        storeImg: store.storeImg,
        owner: {
          id: store.owner.id,
          name: store.owner.name,
          email: store.owner.email,
        },
        avgRating: avgRating || "No ratings yet",
        totalRatings,
        ratings: store.ratings, // if you want to show them individually
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};





// Get average rating for a store
exports.getStoreRating = async (req, res) => {
  try {
    const storeId = req.params.id;

    // Check if store exists
    const store = await Store.findByPk(storeId);
    if (!store) return res.status(404).json({ message: "Store not found" });

    // Calculate average rating
    const result = await Rating.findAll({
      where: { storeId },
      attributes: [
        [Rating.sequelize.fn("AVG", Rating.sequelize.col("rating")), "avgRating"],
        [Rating.sequelize.fn("COUNT", Rating.sequelize.col("id")), "totalRatings"]
      ],
      raw: true
    });

    const avgRating = result[0].avgRating || 0;
    const totalRatings = result[0].totalRatings || 0;

    res.json({
      storeId,
      avgRating: parseFloat(avgRating).toFixed(1),
      totalRatings
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create store (placeholder)
exports.createStore = async (req, res) => {
  res.json({ message: "createStore placeholder" });
};

// Update store (placeholder)
exports.updateStore = async (req, res) => {
  res.json({ message: "updateStore placeholder" });
};

// Delete store (placeholder)
exports.deleteStore = async (req, res) => {
  res.json({ message: "deleteStore placeholder" });
};