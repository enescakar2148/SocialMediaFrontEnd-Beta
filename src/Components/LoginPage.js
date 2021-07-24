import { Grid } from '@material-ui/core';
import React, { Component } from 'react'
import SignIn from './SignIn/SignIn';
import SignUp from './SingUp/SignUp';
import "../css/LoginPage.css";

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            logInState: 0
        }
    }
    // loginStateChanger state kısımında tanımladığım logInState değerini değiştiriyor
    // bu sayede sign in ve sign up componentleri arasında geçiş sağlıyorum state üzerinden
    logInStateChanger = () => {
        this.state.logInState === 0 ? this.setState({logInState:1}) : this.setState({logInState:0})
    }

    render() {
        return (
            <div>
                {// Material ui kütüphanesinin grid sistemi
                // ekranı 12 birim düşünürsek 3-6-3 şeklinde gridlere ayırıyorum
                // ortadaki 6 birimlik gridde sign in ve sign up componentlerini render ediyorum
                }
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="loginCard">
                            <div className="cardInCard">
                                <h1>APP NAME</h1>
                                {
                                    // logInState değerini kontrol ediyorum duruma göre 
                                    // componentleri render ediyorum
                                    this.state.logInState === 0 ? <SignIn/> : <SignUp/>
                                }
                                <div className="loginOrDiv">
                                    <div className="divider"></div>
                                    <div className="loginOr">OR</div>
                                    <div className="divider"></div>
                                </div>
                                <div className="forgotPassword">Forgot Password?</div>
                            </div>
                        </div>
                        <div className="signUpOption">
                            {
                                // logInState değerini kontrol ediyorum duruma göre optionları render ediyorum
                                this.state.logInState === 0 ? (
                            <div className="signUpText">
                                Don't have an account? <span onClick={this.logInStateChanger} style={{fontWeight:'bold', color:"#0395F6", cursor: 'pointer'}}>Sign up</span>
                            </div>) : 
                            (<div className="signInText">
                                Have an account? <span onClick={this.logInStateChanger} style={{fontWeight:'bold', color:"#0395F6", cursor: 'pointer'}}>Sign in</span>
                            </div>)
                            }
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        )
    }
}
