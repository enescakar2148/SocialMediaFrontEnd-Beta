import React, { Component } from 'react'
import "./SignIn.css"
import { Avatar } from '@material-ui/core'

export default class SignIn extends Component {
    render() {
        return (
            <div>
                <div className="signInWrapper">
                    <div className="companyAvatar">
                        <Avatar  style={{display:'inline-flex'}}/>
                        <div className="companyNametext">Company Name</div>
                    </div>
                    <div className="signOptions">
                        <div>SIGN IN</div>
                        <div>SIGN UP</div>
                    </div>
                    <div className="inputSection">
                        <div className="emailInputDiv">
                            <i />
                            <input className="emailInput" type="text" placeholder="Email" />
                        </div>
                        <div className="passwordInputDiv">
                            <i />
                            <input className="passwordInput" type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="moreOptions">
                        <div>Remember me</div>
                        <div>Forgot Password?</div>
                    </div>
                    <button>SIGNIN</button>
                    <div className="hrEffectDiv"></div>
                    <div className="loginOptions">
                        <div>You can also login with:</div>
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
