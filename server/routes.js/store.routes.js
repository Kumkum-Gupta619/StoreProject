const express = require("express");
const router = express.Router();
const storeController = require("../controllers/store.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

// Public: View all stores
router.get("/", storeController.getAllStores);
router.get("/:id", storeController.getStoreById);

// Get rating for a specific store (public)
router.get("/:id/rating", storeController.getStoreRating);

// Only StoreOwner can create/update/delete their store
router.post("/", auth, role(["owner"]), storeController.createStore);
router.put("/:id", auth, role(["owner"]), storeController.updateStore);
router.delete("/:id", auth, role(["owner"]), storeController.deleteStore);

module.exports = router;