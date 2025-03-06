// Login.jsx
import axios from 'axios';
import { useState } from "react";
import './Login.css';

const Login = ({ switchToSignup }) => {

  // state to store form data
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


//function to handle form submission

const handleLogin = async (e) => {
  e.preventDefault(); //prevent the default behaviour of form submission

  try {
    //send a post request to the backend login endpoint
    const response = await axios.post('http://localhost:5000/Routes/auth.js',{username: email, password});
    //save the token in localstorage
    localStorage.setItem('token',response.data.token);
    window.location.href = '/dashboard';
  }

catch (error) {
  //handle error and display error message
  console.error('Login failed:', error.response?.data?.message || error.message);
  alert('Login failed. Please check your credentials and try again.')
} };

  return (
    <div className="login-card">
      <h2 className="login-heading">Login</h2>

      <form className="signup-form-card" onSubmit={handleLogin}>
        <p className="email-text">Email</p>
        <input type="email" className="mail-input-value" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />

        <p className="pass-text">Password</p>
        <input type="password" className="pass-input-value" minLength={8} maxLength={16} placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
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
