const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/rating.controller");
const auth = require("../middleware/auth.middleware");

// Users can submit ratings
router.post("/", auth, ratingController.createRating);

// Users can update their rating
router.put("/:id", auth, ratingController.updateRating);

// View ratings for a store
router.get("/store/:storeId", ratingController.getRatingsForStore);

// View ratings by a user
router.get("/user/:userId", ratingController.getRatingsByUser);

module.exports = router;
