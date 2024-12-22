import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo1.jpg";


export default function Header() {
    return (
        <>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="150"
              height="30"
              class="d-inline-block align-text-top"
            />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="aboutpage">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="Contactpage">
                  Contact
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="studentpage">
                      Student Dashboard
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="employeepage">
                      Employee Dashboard
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="admingpage">
                      Admin Dashboard
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="loginDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sign Up
              </button>
              <ul class="dropdown-menu" aria-labelledby="loginDropdown">
                <li>
                  <Link class="dropdown-item" to="loginpage">
                    Student
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="loginpage">
                    Employee
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
        </>
    );
}