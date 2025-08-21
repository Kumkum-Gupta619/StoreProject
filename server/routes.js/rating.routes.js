const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/rating.controller");
const auth = require("../middleware/auth.middleware");
const { addOrUpdateRating, deleteRating, getMyRatingForStore, getStoreRatings } = ratingController;
// Users can submit ratings
router.post("/", auth, addOrUpdateRating);

// Users can update their rating
router.put("/:id", auth, addOrUpdateRating);

// View ratings for a store
router.get("/store/:storeId", auth, getStoreRatings);

// View ratings by a user
router.get("/user/:userId", auth, getMyRatingForStore);

module.exports = router;
