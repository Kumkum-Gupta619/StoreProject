const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

// Only Admin can see all users
router.get("/", auth, role("Admin"), userController.getAllUsers);

// Users can view/update their profile
router.get("/me", auth, userController.getProfile);
router.put("/me", auth, userController.updateProfile);

// Admin can delete users
router.delete("/:id", auth, role("Admin"), userController.deleteUser);

module.exports = router;
