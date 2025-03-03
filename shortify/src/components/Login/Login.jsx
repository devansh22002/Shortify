// Login.jsx
import React from "react";
import './Login.css';

const Login = ({ switchToSignup }) => {
  return (
    <div className="login-card">
      <h2 className="login-heading">Login</h2>

      <form className="signup-form-card">
        <p className="email-text">Email</p>
        <input type="email" className="mail-input-value" required />

        <p className="pass-text">Password</p>
        <input type="password" className="pass-input-value" minLength={8} maxLength={16} required />

        <div className="login-btn">
          <button type="submit" className="login-button">Login</button>
        </div>
      </form>

      <p className="signup-link">
        Don’t have an account?{" "}
        <span onClick={switchToSignup} className="link-text">Signup</span>
      </p>
    </div>
  );
};

export default Login;
