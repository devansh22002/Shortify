import React from "react";
import "./Signup.css";

const Signup = ({switchToLogin}) => {

  return (
<div className="Signup-card">
                
                <h2 className="signup-heading">Signup</h2>
                <form action="post" className="signup-form-card">
                    <p className="email-text">Email</p>
                    <input type='mail' className="mail-input-value" required/>
                    <p className="pass-text">Password</p>
                    <input type="password" className="pass-input-value" minLength={8} maxLength={16} required/> 


                        <div className="login-btn">
                        <button type='submit' className="login-button">Login</button>
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
