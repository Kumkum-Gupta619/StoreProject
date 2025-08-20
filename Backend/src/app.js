const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/stores", require("./routes/store.routes"));
app.use("/api/ratings", require("./routes/rating.routes"));

module.exports = app;
