import React, { Component } from 'react'
import "../LoginPage.css"

export default class SignIn extends Component {
    render() {
        return (
            <div>
                {// Sign in kısmının inputları ve butonu
                }
                <div className="signInDiv">
                    <input type="text" className="loginInput" placeholder="Email"/>
                    <br/>
                    <input type="password" className="loginInput" placeholder="Password"/>
                    <br/>
                    <button className="loginButton">Log In</button>
                </div>
            </div>
        )
    }
}
