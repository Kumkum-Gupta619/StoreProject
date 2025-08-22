const db = require("../models"); 
const { Rating, User, Store } = db;  // Destructure models from db
const { Sequelize } = require("sequelize");

// Add or Update Rating
exports.addOrUpdateRating = async (req, res) => {
  const { rating, comment, storeId } = req.body;
  try {
    const userId = req.user.id;

    let existingRating = await Rating.findOne({ where: { userId, storeId } });

    if (existingRating) {
      existingRating.rating = rating;
      existingRating.comment = comment;
      await existingRating.save();
      return res.json(existingRating);
    }

    const newRating = await Rating.create({ userId, storeId, rating, comment });
    res.status(201).json(newRating);
  } catch (err) {
    res.status(500).json({ error: err.message, details: err.errors });
  }
};

// Delete Rating
exports.deleteRating = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const rating = await Rating.findOne({ where: { id, userId } });
    if (!rating) return res.status(404).json({ message: "Rating not found" });

    await rating.destroy();
    res.json({ message: "Rating deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Ratings for a Store
exports.getStoreRatings = async (req, res) => {
  try {
    const { storeId } = req.params;
    const ratings = await Rating.findAll({
      where: { storeId },
      include: [{ model: User, attributes: ["id", "name"] }]
    });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Current User's Rating for a Store
exports.getMyRatingForStore = async (req, res) => {
  try {
    const { storeId } = req.params;
    const userId = req.user.id;

    const rating = await Rating.findOne({ where: { storeId, userId } });
    if (!rating) return res.status(404).json({ message: "No rating found" });

    res.json(rating);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Ratings with User + Store Details
exports.getAllRatingsWithDetails = async (req, res) => {
  try {
    const ratings = await Rating.findAll({
      include: [
        { model: User, attributes: ["id", "name", "email"] },
        { model: Store, attributes: ["id", "name", "location"] }
      ],
    });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Ratings by a Specific User
exports.getUserRatings = async (req, res) => {
  try {
    const { userId } = req.params;
    const ratings = await Rating.findAll({
      where: { userId },
      include: [{ model: Store, attributes: ["id", "name", "location"] }]
    });

    if (!ratings.length) return res.status(404).json({ message: "No ratings found" });

    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // ✅ Get Average Rating of a Store
// exports.getAverageRatingForStore = async (req, res) => {
//   try {
//     const { storeId } = req.params;

//     const result = await Rating.findOne({
//       where: { storeId },
//       attributes: [
//         [Sequelize.fn("AVG", Sequelize.col("rating")), "averageRating"],
//         [Sequelize.fn("COUNT", Sequelize.col("id")), "totalRatings"],
//       ],
//     });

//     if (!result || !result.dataValues.totalRatings) {
//       return res.status(404).json({ message: "No ratings found for this store" });
//     }

//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
