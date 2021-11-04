import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // npm install react-icons --save
import { BsGoogle } from "react-icons/bs"; // npm install react-icons --save
import "bootstrap/dist/css/bootstrap.min.css"; // npm install react-bootstrap bootstrap@5.1.3
import "./Register_Form_01.css";

const Register_Form_01 = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="form-container register-container">
          <form className="register_form">
            <h1 className="register_title mb-4">Register</h1>
            <div class="social-container">
              <a href="#" class="social">
                <FaFacebookF />
              </a>
              <a href="#" class="social">
                <BsGoogle />
              </a>
              <a href="#" class="social">
                <FaLinkedinIn />
              </a>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Username"
            />
            <input
              name="email"
              placeholder="Email"
              type="email"
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
            />
            <button className=" register_btn mt-3">register</button>
          </form>
        </div>
        <div className="reg-overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="register_title">Already have an account?</h1>
              <p className="register_desc">
                To keep connected with us please login with your personal info
              </p>
              <button className="login_btn">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register_Form_01;
