const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");

// Get all gallery images
router.get("/", galleryController.getAllGalleryImages);

// Get gallery image by ID
router.get("/:id", galleryController.getGalleryImageById);

// Create new gallery image
router.post("/", galleryController.createGalleryImage);

// Delete gallery image
router.delete("/:id", galleryController.deleteGalleryImage);

module.exports = router;
