import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    service_id: "",
    appointment_date: "",
    appointment_time: "",
  });

  useEffect(() => {
    fetchServices();

    // Check if service_id was passed from services page
    if (location.state?.serviceId) {
      setFormData((prev) => ({
        ...prev,
        service_id: location.state.serviceId.toString(),
      }));
    }
  }, [location.state]);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post("/api/appointments", formData);
      setSuccess(true);
      setFormData({
        customer_name: "",
        customer_phone: "",
        customer_email: "",
        service_id: "",
        appointment_date: "",
        appointment_time: "",
      });
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert("Failed to book appointment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="booking-page">
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Book an Appointment
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
          Fill out the form below to schedule your visit
        </p>
      </section>

      {/* Booking Form */}
      <section className="booking-section">
        <div className="container">
          {success ? (
            <div
              style={{
                background: "white",
                padding: "3rem",
                borderRadius: "20px",
                textAlign: "center",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <h2 style={{ color: "#4caf50", marginBottom: "1rem" }}>
                Booking Successful!
              </h2>
              <p style={{ marginBottom: "2rem" }}>
                Thank you for booking with Apon Saloon. We will confirm your
                appointment shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                style={{
                  background: "#e94560",
                  color: "white",
                  padding: "1rem 2rem",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <h2
                style={{
                  marginBottom: "2rem",
                  color: "#1a1a2e",
                  textAlign: "center",
                }}
              >
                Appointment Details
              </h2>

              <div className="form-group">
                <label htmlFor="customer_name">Full Name *</label>
                <input
                  type="text"
                  id="customer_name"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="customer_phone">Phone Number *</label>
                <input
                  type="tel"
                  id="customer_phone"
                  name="customer_phone"
                  value={formData.customer_phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="customer_email">Email Address</label>
                <input
                  type="email"
                  id="customer_email"
                  name="customer_email"
                  value={formData.customer_email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service_id">Select Service *</label>
                <select
                  id="service_id"
                  name="service_id"
                  value={formData.service_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select a Service --</option>
                  {loading ? (
                    <option>Loading services...</option>
                  ) : (
                    services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} - ${service.price} ({service.duration}{" "}
                        min)
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="appointment_date">Preferred Date *</label>
                <input
                  type="date"
                  id="appointment_date"
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="appointment_time">Preferred Time *</label>
                <input
                  type="time"
                  id="appointment_time"
                  name="appointment_time"
                  value={formData.appointment_time}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={submitting}
              >
                {submitting ? "Booking..." : "Book Appointment"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Booking;
