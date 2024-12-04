import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.termsAccepted) {
      console.log("Registration successful:", formData);
      navigate("/loginpage"); // Redirect to the login page after registration
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="a1">
      <div className="wrapper">
        <div className="form-box register">
          <form onSubmit={handleSubmit}>
            <h1>Registration</h1>

            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                value={formData.username}
                onChange={handleChange}
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <FaEnvelope className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />{" "}
                I agree to terms & conditions
              </label>
            </div>

            <button type="submit">Register</button>

            <div className="register-link">
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/loginpage")}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
