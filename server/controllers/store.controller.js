const Store = require("../models/store.model");

// Get all stores
exports.getAllStores = async (req, res) => {
  try {
    const stores = await Store.findAll();

    // Add default rating field in the response
    const storesWithRating = stores.map(store => ({
      ...store.toJSON(),
      rating: `${store.rating || 0} out of 5`
    }));

    res.json(storesWithRating);
  } catch (err) {
    res.status(500).json({ error: err.message, details: err.errors });
  }
};

// Get store by ID
exports.getStoreById = async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id );
    if (!store) return res.status(404).json({ message: "Store not found" });
    res.json(store);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create store (Owner only)
exports.createStore = async (req, res) => {
  try {
    const { name, address, storeImg } = req.body;
    console.log(req.body);
    const store = await Store.create({
      name,
      address,
      storeImg: storeImg,
      rating: 1,
      ownerId: req.user.id,

    });
    res.status(201).json({ message: "Store created successfully", store });
  } catch (err) {
    res.status(500).json({ error: err.message, details: err.errors });
  }
};

// Update store (Owner only)
exports.updateStore = async (req, res) => {
  try {
    const { name, address } = req.body;
    const store = await Store.findByPk(req.params.id);
    if (!store) return res.status(404).json({ message: "Store not found" });

    // ensure only owner can update
    if (store.ownerId !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    await store.update({ name, address });
    res.json({ message: "Store updated successfully", store });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete store (Owner only)
exports.deleteStore = async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id);
    if (!store) return res.status(404).json({ message: "Store not found" });

    if (store.ownerId !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    await store.destroy();
    res.json({ message: "Store deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
