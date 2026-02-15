import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("/api/services");
      setServices(response.data.slice(0, 4)); // Get first 4 services
      setLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Apon Saloon</h1>
          <p>
            Experience premium hair and beauty services in a luxurious
            atmosphere. Our expert stylists are dedicated to making you look and
            feel your best.
          </p>
          <Link to="/booking" className="hero-btn">
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Our <span>Services</span>
          </h2>
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading services...</p>
          ) : (
            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <img
                    src={
                      service.image ||
                      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400"
                    }
                    alt={service.name}
                  />
                  <div className="service-info">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span className="service-price">${service.price}</span>
                      <span className="service-duration">
                        {service.duration} min
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/services" className="hero-btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2 className="section-title">
            Why Choose <span>Us</span>
          </h2>
          <div className="services-grid">
            <div className="service-card" style={{ textAlign: "center" }}>
              <div className="service-info">
                <h3>Expert Stylists</h3>
                <p>
                  Our team of certified professionals has years of experience in
                  the beauty industry.
                </p>
              </div>
            </div>
            <div className="service-card" style={{ textAlign: "center" }}>
              <div className="service-info">
                <h3>Premium Products</h3>
                <p>
                  We use only the highest quality products to ensure the best
                  results for your hair and skin.
                </p>
              </div>
            </div>
            <div className="service-card" style={{ textAlign: "center" }}>
              <div className="service-info">
                <h3>Relaxing Environment</h3>
                <p>
                  Our salon provides a calm and luxurious atmosphere for your
                  complete relaxation.
                </p>
              </div>
            </div>
            <div className="service-card" style={{ textAlign: "center" }}>
              <div className="service-info">
                <h3>Affordable Prices</h3>
                <p>
                  Premium services at competitive prices to give you the best
                  value for your money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="booking-section">
        <div
          className="container"
          style={{ textAlign: "center", color: "white" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Ready to Look Amazing?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
            Book your appointment today and let our experts transform your look.
          </p>
          <Link to="/booking" className="hero-btn">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
