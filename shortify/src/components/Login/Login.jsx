import React from "react";
import './Login.css';

const Login = () =>{

    return(

            <div className="login-card">
                
                <span className="signup-heading">Signup Form</span>
                <form action="post" className="signup-form-card">
                    <p className="email-text">Email</p>
                    <input type='mail' className="mail-input-value" required/>
                    <p className="pass-text">Password</p>
                    <input type="password" className="pass-input-value" minLength={8} maxLength={16} required/> 
                    
                    <div className="btn">
                        <a href="#">Create Account</a>
                    </div>

                </form>
            </div>

    )
}

export default Login