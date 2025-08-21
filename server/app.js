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

app.get("/", (req, res) => {
    res.send("server started");
})
app.listen(3000, () => {
    console.log("server started");
})
module.exports = app;
