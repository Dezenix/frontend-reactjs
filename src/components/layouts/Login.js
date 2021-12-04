import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // npm install react-icons --save
import { BsGoogle } from "react-icons/bs"; // npm install react-icons --save
import "bootstrap/dist/css/bootstrap.min.css"; // npm install react-bootstrap bootstrap@5.1.3
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="form-container sign-in-container">
          <form className="login_form">
            <h1 className="login_title ">Sign in</h1>
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
            <p className="forgot_pass">Or use your account</p>
            <input name="email" placeholder="Email" type="email" />
            <input name="password" placeholder="Password" type="password" />
            <a href="#" className="forgot_pass">
              Forgot your password?
            </a>
            <button className="login_btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="login_title">Don't have an account?</h1>
              <p className="login_desc">
                Register and start your journey with us
              </p>
              <button className="register_btn">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
