import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Apon Saloon</h4>
          <p>
            Your premier destination for premium hair and beauty services. We
            provide top-quality styling and spa treatments in a luxurious
            atmosphere.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              i
            </a>
            <a href="#" aria-label="Twitter">
              t
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <p>
            <a href="/services">Our Services</a>
            <br />
            <a href="/gallery">Gallery</a>
            <br />
            <a href="/booking">Book Appointment</a>
            <br />
            <a href="/contact">Contact Us</a>
          </p>
        </div>

        <div className="footer-section">
          <h4>Business Hours</h4>
          <p>
            Monday - Friday: 9:00 AM - 8:00 PM
            <br />
            Saturday: 9:00 AM - 6:00 PM
            <br />
            Sunday: 10:00 AM - 5:00 PM
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>
            123 Beauty Lane
            <br />
            City Center, Dhaka 1200
            <br />
            Phone: +880 1234 567890
            <br />
            Email: info@aponsaloon.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Apon Saloon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
