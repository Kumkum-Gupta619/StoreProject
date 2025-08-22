const Store = require("../models/store.model");
const Rating = require("../models/rating.model"); // import Rating model

// Get all stores (placeholder)
exports.getAllStores = async (req, res) => {
  res.json({ message: "getAllStores placeholder" });
};

// Get store by ID (placeholder)
exports.getStoreById = async (req, res) => {
  res.json({ message: "getStoreById placeholder" });
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