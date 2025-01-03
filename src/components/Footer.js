import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              "Empowering innovation, delivering quality solutions, and building lasting relationships."
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="aboutpage">About Us</Link>
              </li>
              <li>
                <Link to="contactpage">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2024 TalentBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
