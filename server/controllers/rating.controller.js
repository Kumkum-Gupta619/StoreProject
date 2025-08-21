const { Rating, Store, User } = require("../models");

// Add or Update Rating
exports.addOrUpdateRating = async (req, res) => {
  try {
    const { storeId } = req.params;
    const { rating, comment } = req.body;

    // check if store exists
    const store = await Store.findByPk(storeId);
    if (!store) return res.status(404).json({ message: "Store not found" });

    // check if user already rated
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
    res.status(500).json({ error: err.message });
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
