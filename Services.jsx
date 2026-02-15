import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("/api/services");
      setServices(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);
    }
  };

  return (
    <div className="services-page">
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Our Services</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
          Discover our range of premium hair and beauty services
        </p>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
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
                        marginTop: "1rem",
                      }}
                    >
                      <span className="service-price">${service.price}</span>
                      <span className="service-duration">
                        {service.duration} min
                      </span>
                    </div>
                    <Link
                      to="/booking"
                      state={{ serviceId: service.id }}
                      style={{
                        display: "block",
                        textAlign: "center",
                        marginTop: "1rem",
                        padding: "0.8rem",
                        background: "#e94560",
                        color: "white",
                        borderRadius: "8px",
                        fontWeight: "600",
                      }}
                    >
                      Book Now
                    </Link>
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
            Want a Custom Look?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
            Book a consultation with our expert stylists to discuss your unique
            style.
          </p>
          <Link to="/contact" className="hero-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
