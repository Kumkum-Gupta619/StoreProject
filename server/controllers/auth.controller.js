const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { User } = require("../models/user.model.js");   // Sequelize User model
const users = require("../models/user.model.js")


// Signup
exports.signup = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password, role, address } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    console.log(req.body);
    const existingUser = await users.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await users.create({
      name,
      email,
      password: hashedPassword,
      role: role || "User",
      address,
    });
    console.log(user);


    res.status(201).json({
      success: true,
      message: "User registered successfully", user
    });
  } catch (err) {
    console.log({ error: err.message, details: err.errors });

    res.status(500).json({ error: err.message, details: err.errors });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await users.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      success: true,
      message: "Login successful", token, user
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
