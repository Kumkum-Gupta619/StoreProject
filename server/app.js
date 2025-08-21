const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes.js/auth.routes"));
app.use("/api/users", require("./routes.js/user.routes"));
app.use("/api/stores", require("./routes.js/store.routes"));
app.use("/api/ratings", require("./routes.js/rating.routes"));

module.exports = app;
