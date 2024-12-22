import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 

    const form = e.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if ((username === "${savedProfile.userId}" && password === "admin123")) {
      navigate("/employeepage");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleRegister = () => {
    navigate("/registerpage");
  };

  const handleForgetpass = () => {
    navigate("/forgotpasswordpage");
  };

  return (
    <div className="a1">
      <div className="wrapper">
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" name="username" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a
                onClick={handleForgetpass}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Forgot Password
              </a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <span
                  onClick={handleRegister}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  Register
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
