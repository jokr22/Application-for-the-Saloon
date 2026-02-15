const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const serviceRoutes = require("./routes/serviceRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const seedGallery = require("./seed");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/gallery", galleryRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Apon Saloon API" });
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await seedGallery();
});

module.exports = app;
