import React, { Component } from "react";
import "../../css/SignUp.css";

export default class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: 0
    }
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
            class="button"
            id="sign-in-button"
          >
            Sign In
          </button>
          <button
            class="button active-option"
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
              placeholder="User Name"
            />
          </div>
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
        <button id="go-feed-login">
          SIGN UP
        </button>
        <div className="hr"></div>
      </div>
    );
  }
}
