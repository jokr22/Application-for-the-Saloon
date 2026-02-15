const pool = require("../config/db");

// Get all gallery images
const getAllGalleryImages = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM gallery ORDER BY created_at DESC",
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get gallery image by ID
const getGalleryImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM gallery WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Create new gallery image
const createGalleryImage = async (req, res) => {
  try {
    const { title, image_url, category } = req.body;
    const result = await pool.query(
      "INSERT INTO gallery (title, image_url, category) VALUES ($1, $2, $3) RETURNING *",
      [title, image_url, category],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete gallery image
const deleteGalleryImage = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM gallery WHERE id = $1 RETURNING *",
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllGalleryImages,
  getGalleryImageById,
  createGalleryImage,
  deleteGalleryImage,
};
