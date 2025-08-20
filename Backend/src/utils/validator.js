// utils/validators.js

// ✅ Validate user signup
exports.validateSignup = (data) => {
  const errors = {};
  if (!data.name || data.name.trim() === "") {
    errors.name = "Name is required";
  }
  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Valid email is required";
  }
  if (!data.password || data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!data.role || !["user", "owner", "admin"].includes(data.role)) {
    errors.role = "Role must be user, owner, or admin";
  }
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

// ✅ Validate login
exports.validateLogin = (data) => {
  const errors = {};
  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Valid email is required";
  }
  if (!data.password || data.password === "") {
    errors.password = "Password is required";
  }
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

// ✅ Validate store
exports.validateStore = (data) => {
  const errors = {};
  if (!data.name || data.name.trim() === "") {
    errors.name = "Store name is required";
  }
  if (!data.address || data.address.trim() === "") {
    errors.address = "Store address is required";
  }
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

// ✅ Validate rating
exports.validateRating = (data) => {
  const errors = {};
  if (!data.rating || data.rating < 1 || data.rating > 5) {
    errors.rating = "Rating must be between 1 and 5";
  }
  if (!data.storeId) {
    errors.storeId = "Store ID is required";
  }
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
