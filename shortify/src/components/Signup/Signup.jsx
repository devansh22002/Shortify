import React from "react";
import "./Signup.css";

const Signup = () => {

  return (
    <>
      <div className="signup">
        <div className="signup head">
            <h2>Signup </h2>
        </div> <br />
        <form>
            <span className="emailid">
                <h5>Email ID</h5>
            </span> <br />

            <input type="mail" required></input> <br />

            <span className="password">
                <h5>Password</h5>
            </span> <br />
            <input className="pass" type="password" min={8} max={16}></input>
            <br />
            <button className="btn"> Signup </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
