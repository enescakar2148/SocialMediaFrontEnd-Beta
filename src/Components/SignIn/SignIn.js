import React, { Component } from "react";
import "../../css/SignIn.css";

export default class SignIn extends Component {

  logInButtonFunc = () => {
    window.location = "/SocialMediaFrontEnd-Beta/home"
  }

  render() {
    return (
      <div className="sign-in-wrapper">
        {/* Compnay Section */}
        <div className="company">
          <i class="fab fa-telegram-plane" id="company-logo-icon"></i>
          <h1 id="company-name">Company Name</h1>
        </div>

        {/* Buttons Section */}
        <div className="sign-options">
          <button
            onClick={this.props.changerZero}
            class="button active-option"
            id="sign-in-button"
          >
            Sign In
          </button>
          <button
            onClick={this.props.changerOne}
            class="button"
            id="sign-up-button"
          >
            Sign Up
          </button>
        </div>

        <div className="input-section">
          <div className="input-div">
            <div class="icon-div-sign-option">
              <i class="fas fa-user-alt icon-sign-option"></i>
            </div>
            <input
              className="emailInput input"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="input-div">
            <div class="icon-div-sign-option">
              <i class="fas fa-lock icon-sign-option"></i>
            </div>
            <input
              className="passwordInput input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="more-options">
            <p id="forgot-pass-text">Forgot Password?</p>
        </div>
        <button id="go-feed-login" onClick={this.logInButtonFunc}>LOG IN</button>
        <div className="hr">
            {/* <p id="content-hr">lorem</p> */}
        </div>

        {/* <div class="more-login-options-wrapper">
            <h1 id="text-more-option">You can also login with:</h1>
        </div> */}

        {/*
                    
                    
                    <div className="loginOptions">
                        <div></div>
                        <div style={{display:'flex'}}>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                        </div>
                    </div>
                </div> */}
      </div>
    );
  }
}
