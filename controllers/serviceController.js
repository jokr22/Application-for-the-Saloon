const pool = require("../config/db");

// Get all services
const getAllServices = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM services ORDER BY created_at DESC",
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get service by ID
const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM services WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Create new service
const createService = async (req, res) => {
  try {
    const { name, description, price, duration, image } = req.body;
    const result = await pool.query(
      "INSERT INTO services (name, description, price, duration, image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, description, price, duration, image],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Update service
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, duration, image } = req.body;

    const result = await pool.query(
      "UPDATE services SET name = $1, description = $2, price = $3, duration = $4, image = $5 WHERE id = $6 RETURNING *",
      [name, description, price, duration, image, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete service
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM services WHERE id = $1 RETURNING *",
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json({ message: "Service deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
