import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await axios.get("/api/gallery");
      setImages(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching gallery:", error);
      setLoading(false);
    }
  };

  const categories = [
    "all",
    "haircut",
    "coloring",
    "skincare",
    "styling",
    "nails",
    "spa",
    "grooming",
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Our Gallery</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
          Browse through our collection of stunning hairstyles and treatments
        </p>
      </section>

      {/* Category Filter */}
      <section style={{ padding: "2rem", background: "#f5f5f5" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: "0.5rem 1.5rem",
                  border: "none",
                  borderRadius: "25px",
                  background:
                    selectedCategory === category ? "#e94560" : "white",
                  color: selectedCategory === category ? "white" : "#333",
                  cursor: "pointer",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  transition: "all 0.3s",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading gallery...</p>
          ) : filteredImages.length === 0 ? (
            <p style={{ textAlign: "center" }}>
              No images found in this category.
            </p>
          ) : (
            <div className="gallery-grid">
              {filteredImages.map((image) => (
                <div key={image.id} className="gallery-item">
                  <img src={image.image_url} alt={image.title} />
                  <div className="gallery-overlay">
                    <h3>{image.title}</h3>
                    <p>{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="booking-section">
        <div
          className="container"
          style={{ textAlign: "center", color: "white" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Love Our Work?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
            Book an appointment today and let us create something beautiful for
            you!
          </p>
          <a href="/booking" className="hero-btn">
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
