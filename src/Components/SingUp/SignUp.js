import React, { Component } from "react";
import "../../css/SignUp.css";
import { Avatar } from "@material-ui/core";
import firebase from "firebase";
import axios from "axios";
import Loader from "react-loader-spinner";

// Required for side-effects
require("firebase/firestore");

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAMrpDyNKZGKEUJ8Qv-KUvpzxcSxV4bQ8M",
    authDomain: "qigatask.firebaseapp.com",
    projectId: "qigatask",
    storageBucket: "qigatask.appspot.com",
  });
} else {
  firebase.app(); // if already initialized, use that one
}
var storage = firebase.storage();

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    // eslint-disable-next-line
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: 0
    }
  }

  userNameInputListener = (event) => {
    this.userName = event.target.value;
  };

  passwordInputListener = (event) => {
    this.password = event.target.value;
    window.location = "/home";
  };

  profilePhotoHandler = (event) => {
    this.file = event.target.files[0];
  };

  signUpButtonFunc = () => {
    if (this.file) {
      this.setState({
        loading:1
      })
      let storageRef = storage.ref().child("profilePhotos").child(uuidv4()); 

      storageRef.put(this.file).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          let bundle = {
            userName: this.userName,
            ppURL: url,
          };

          axios
            .post("http://localhost:8080/api/auth/register", bundle)
            .then((response) => {
              this.setState({
                loading:0
              })
              //TODO burada location değişecek
              window.location = "/home";
            })
            .catch((err) => {
              alert("Bir hata meydana geldi: "+ err)
            });
        });
      });
    }
  };

  render() {
    let button
    if(this.state.loading===0){
      button = (<div className="choose-pp">
                <p id="choose-pp-text">Profil Fotoğrafı Seç </p>
                <div className="pp-option">
                  <input
                    onChange={this.profilePhotoHandler}
                    type="file"
                    id="choose-pp-button"
                  />
                </div>
              </div>)
    }else{
      button = <Loader type="TailSpin" color="#2fb3e1" width="40px" height="40px"/>
    }
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
            class="button"
            id="sign-in-button"
          >
            Sign In
          </button>
          <button
            onClick={this.props.changerOne}
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
        <button id="go-feed-login" onClick={this.signUpButtonFunc}>
          SIGN UP
        </button>
        <div className="hr"></div>
      </div>
    );
  }
}
