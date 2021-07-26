import React, { Component } from 'react'
import "../../css/SignUp.css"
import { Avatar } from '@material-ui/core'
import firebase from "firebase";
import axios from 'axios';

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
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        // eslint-disable-next-line 
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

export default class SignUp extends Component {

    userNameInputListener = (event) => {
        this.userName = event.target.value
    }

    passwordInputListener = (event) => {
        this.password = event.target.value
        window.location = "http://www.google.com"
    }

    profilePhotoHandler = (event) => {
        this.file = event.target.files[0]
    }

    signUpButtonFunc = () => {
        if(this.file){
            let storageRef = storage.ref().child("profilePhotos").child(uuidv4())

            storageRef.put(this.file).then((snapshot)=> {
                snapshot.ref.getDownloadURL().then((url)=>{
                    let bundle = {
                        userName: this.userName,
                        ppURL: url
                    }

                    axios.post("http://localhost:8080/api/auth/register", bundle).then((response)=>  {
                        //TODO burada location değişecek
                        window.location = "http://www.google.com";
                    }).catch((err)=> {
                        // alert("Bir hata meydana geldi: "+ err)
                    })
                })
            })
        }
    }

    render() {
        return (
            <div>
                <div className="signInWrapper">
                    <div className="companyAvatar">
                        <Avatar  style={{display:'inline-flex', minWidth:"80px", minHeight:"80px" }}/>
                        <div className="companyNametext">Company Name</div>
                    </div>
                    <div className="signOptions">
                        <button onClick={this.props.changerZero} >SIGN IN</button>
                        <button onClick={this.props.changerOne} >SIGN UP</button>
                    </div>
                    <div className="inputSection">
                        <div className="emailInputDiv">
                            <i />
                            <input onChange={this.userNameInputListener} className="emailInput" type="text" placeholder="Username" />
                        </div>
                        <div className="passwordInputDiv">
                            <i />
                            <input onChange={this.passwordInputListener} className="passwordInput" type="password" placeholder="Password" />
                        </div>
                        <div>
                            <div>Profile Photo</div>
                            <input onChange={this.profilePhotoHandler} type="file" />
                        </div>
                    </div>
                    <div className="moreOptions">
                        <div>Remember me</div>
                    </div>
                    <button onClick={this.signUpButtonFunc}>SIGN UP</button>
                    <div className="hrEffectDiv"></div>
                    <div className="loginOptions">
                        <div>You can also sign up with:</div>
                        <div style={{display:'flex'}}>
                            <Avatar/>
                            <Avatar/>
                            <Avatar/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
