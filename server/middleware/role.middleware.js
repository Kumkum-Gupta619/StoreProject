// middleware/role.middleware.js

// This middleware checks if a user has the required role to access a route.

// 1. Define the role-based middleware function.
// It's a "curried" function that accepts an array of allowed roles first,
// and then returns the actual middleware.
const roleMiddleware = (roles) => {
  return (req, res, next) => {
    // a. Ensure the user object is available from the authMiddleware.
    if (!req.user || !req.user.role) {
      // This should ideally be caught by the authentication middleware,
      // but it's a good practice to have a check here as well.
      return res.status(403).json({ message: "Access Denied: User role not found." });
    }

    // b. Check if the user's role is included in the array of allowed roles.
    if (roles.includes(req.user.role)) {
      // If the user's role is allowed, proceed to the next middleware.
      next();
    } else {
      // If the role is not allowed, send a 403 Forbidden response.
      return res.status(403).json({ message: "Access Denied" });
    }
  };
};

// 2. Export the middleware.
module.exports = roleMiddleware;
