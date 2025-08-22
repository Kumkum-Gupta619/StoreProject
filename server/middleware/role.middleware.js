
const roleMiddleware = (roles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: "Access Denied: User role not found." });
    }

    if (roles.includes(req.user.role)) {
      next();
    } else {
      return res.status(403).json({ message: "Access Denied" });
    }
  };
};

// 2. Export the middleware.
module.exports = roleMiddleware;
