import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo1.jpg";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-text-top img-fluid"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutpage">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactpage">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/studentpage">
                    Student Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/employeepage">
                    Employee Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admingpage">
                    Admin Dashboard
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="dropdown ms-lg-3 mt-2 mt-lg-0">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="loginDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sign Up
            </button>
            <ul className="dropdown-menu" aria-labelledby="loginDropdown">
              <li>
                <Link className="dropdown-item" to="/loginpage">
                  Student
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/loginpage">
                  Employee
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
