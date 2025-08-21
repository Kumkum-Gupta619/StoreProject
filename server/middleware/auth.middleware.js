// middleware/auth.middleware.js

// This middleware verifies the authenticity of a user's JWT.
// It ensures that only authenticated users can access certain routes.

// 1. Import necessary libraries
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// 2. Define the authentication middleware function
// This function will be used in your routes.
const authMiddleware = (req, res, next) => {
  try {
    // a. Get the authorization header from the request.
    const authHeader = req.headers.authorization;

    // b. Check if the header exists and has the correct format.
    // The format is typically "Bearer <token>".
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided or invalid format." });
    }

    // c. Extract the token from the header.
    const token = authHeader.split(" ")[1];

    // d. Verify the token using the secret key from your environment variables.
    // The jwt.verify() method decodes the token and checks its signature.
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // e. Attach the decoded user payload to the request object.
    // This makes user information (like id and role) available to subsequent middleware
    // and route handlers.
    req.user = decoded;

    // f. Call the next middleware in the stack.
    next();
  } catch (error) {
    // If token verification fails (e.g., it's expired or invalid), send a 401 response.
    return res.status(401).json({ message: "Invalid Token" });
  }
};

// 3. Export the middleware for use in your application.
module.exports = authMiddleware;
