import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div>
                {// Sign up kısmının inputları ve butonu
                }
                <div className="signInDiv">
                    <input type="text" className="loginInput" placeholder="Email"/>
                    <br/>
                    <input type="text" className="loginInput" placeholder="Full Name"/>
                    <br/>
                    <input type="text" className="loginInput" placeholder="Username"/>
                    <br/>
                    <input type="password" className="loginInput" placeholder="Password"/>
                    <br/>
                    <button className="loginButton">Sign up</button>
                </div>
            </div>
        )
    }
}
