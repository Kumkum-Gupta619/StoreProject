// controllers/rating.controller.js
const Store = require("../models/store.model")
const User = require("../models/user.model")
const Rating = require('../models/rating.model')

// Add or Update Rating
exports.addOrUpdateRating = async (req, res) => {
  const { rating, comment, storeId } = req.body;
  console.log("here is the rating controller", req.body);
  try {

    const store = await Store.findByPk(storeId)
    // console.log(store);
    if (!store) return res.status(404).json({ message: "Store not found" });

    // check if user already rated this store
    let existingRating = await Rating.findOne({
      where: { storeId, userId: req.user.id },
    });

    if (existingRating) {
      // update rating
      existingRating.rating = rating;
      existingRating.comment = comment;
      await existingRating.save();
      return res.json({ message: "Rating updated", rating: existingRating });
    }

    // new rating
    const newRating = await Rating.create({
      storeId,
      userId: req.user.id,
      rating,
      comment,
    });

    res.status(201).json({ message: "Rating added", rating: newRating });
  } catch (err) {
    res.status(500).json({ error: err.message, details: err.errors });
  }
};

// Get all ratings for a store
exports.getStoreRatings = async (req, res) => {
  try {
    const { storeId } = req.params;

    const ratings = await Rating.findAll({
      where: { storeId },
      include: [{ model: User, attributes: ["id", "name", "email"] }],
    });

    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get rating by logged-in user for a store
exports.getMyRatingForStore = async (req, res) => {
  try {
    const { storeId } = req.params;

    const rating = await Rating.findOne({
      where: { storeId, userId: req.user.id },
    });

    if (!rating) return res.status(404).json({ message: "You have not rated this store" });

    res.json(rating);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete rating
exports.deleteRating = async (req, res) => {
  try {
    const { storeId } = req.params;

    const rating = await Rating.findOne({
      where: { storeId, userId: req.user.id },
    });

    if (!rating) return res.status(404).json({ message: "Rating not found" });

    await rating.destroy();
    res.json({ message: "Rating deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
