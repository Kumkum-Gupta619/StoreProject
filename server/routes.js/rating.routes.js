const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/rating.controller");
const auth = require("../middleware/auth.middleware");

const { 
  addOrUpdateRating, 
  deleteRating, 
  getMyRatingForStore, 
  getStoreRatings, 
  getAllRatingsWithDetails, 
  getUserRatings 
} = ratingController;

// Add a new rating
router.post("/", auth, addOrUpdateRating);

// Update an existing rating
router.put("/:id", auth, addOrUpdateRating);

// Delete a rating
router.delete("/:id", auth, deleteRating);

// Get all ratings for a specific store
router.get("/store/:storeId", getStoreRatings);

// Get all ratings created by a specific user
router.get("/user/:userId", getUserRatings);

// Get logged-in user's rating for a specific store
router.get("/store/:storeId/my", auth, getMyRatingForStore);

// Get all ratings with user & store details
router.get("/all/details", getAllRatingsWithDetails);

module.exports = router;
