import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to the backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Contact Us</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
          Get in touch with us for any inquiries
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p style={{ marginBottom: "2rem" }}>
              Have questions about our services? Want to book a consultation?
              Feel free to reach out to us through any of the channels below.
            </p>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <strong>Address</strong>
                <p>Bandertilla,Navy Hospital Gate ,Chattogram</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <strong>Phone</strong>
                <p>+7 993 365 16 21</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <strong>Email</strong>
                <p>shuvod875@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <strong>Business Hours</strong>
                <p>
                  Mon - Fri: 9:00 AM - 8:00 PM
                  <br />
                  Saturday: 9:00 AM - 6:00 PM
                  <br />
                  Sunday: 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <h3 style={{ color: "#4caf50", marginBottom: "1rem" }}>
                  Thank You!
                </h3>
                <p>Your message has been sent. We'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: "1rem",
                    padding: "0.8rem 1.5rem",
                    background: "#e94560",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ marginBottom: "1.5rem", color: "#1a1a2e" }}>
                  Send Us a Message
                </h3>

                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: "0 2rem 5rem" }}>
        <div className="container">
          <div
            style={{
              background: "#f5f5f5",
              height: "300px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "#666" }}>Map integration would go here</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
