import { useState } from "react";
import "./Signup.css";

const Signup = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle signup submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }) // Fix: Send username
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="Signup-card">
      <h2 className="signup-heading">Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form-card">
        <p className="email-text">Email</p>
        <input
          type="email"
          className="mail-input-value"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <p className="pass-text">Password</p>
        <input
          type="password"
          className="pass-input-value"
          minLength={8}
          maxLength={16}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="login-btn">
          <button type="submit" className="login-button">Signup</button>
        </div>
      </form>

      <p className="signup-link">
        Already have an account?{" "}
        <span onClick={switchToLogin} className="link-text">Login</span>
      </p>
    </div>
  );
};

export default Signup;
