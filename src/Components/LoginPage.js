import { Grid } from '@material-ui/core';
import React, { Component } from 'react'
import SignIn from './SignIn/SignIn';
import SignUp from './SingUp/SignUp';
import "../css/LoginPage.css";
import loginPhoto from '../images/loginPhoto.png'

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            logInState: 0
        }
    }
    // loginStateChanger state kısımında tanımladığım logInState değerini değiştiriyor
    // bu sayede sign in ve sign up componentleri arasında geçiş sağlıyorum state üzerinden

    logInStateToOneChanger = () => {
        this.setState({logInState:1})
    }

    logInStateToZeroChanger = () => {
        this.setState({logInState:0})
    }

    render() {
        if(this.state.logInState===0){
            return (
                <div>
                    {// Material ui kütüphanesinin grid sistemi
                    // ekranı 12 birim düşünürsek 3-6-3 şeklinde gridlere ayırıyorum
                    // ortadaki 6 birimlik gridde sign in ve sign up componentlerini render ediyorum
                    }
                    <Grid container>
                        <Grid item xs={6}>
                            <div>
                                {/* Giriş yapmak ve o componenti render etmek için props */}

                                <SignIn changerOne={this.logInStateToOneChanger} changerZero={this.logInStateToZeroChanger}/>
                            </div>
                                
                        </Grid>
                        <Grid item xs={6}>
                            <img src={loginPhoto} alt="" width="100%" height="100%"/>
                        </Grid>
                    </Grid>
                </div>
            )
        }
        if(this.state.logInState===1){
            return (
                <div>
                    {// Material ui kütüphanesinin grid sistemi
                    // ekranı 12 birim düşünürsek 3-6-3 şeklinde gridlere ayırıyorum
                    // ortadaki 6 birimlik gridde sign in ve sign up componentlerini render ediyorum
                    }
                    <Grid container>
                        <Grid item xs={6}>
                                {/* Kayıt olmak ve o componenti render etmek için props */}
                            <div>
                                <SignUp changerOne={this.logInStateToOneChanger} changerZero={this.logInStateToZeroChanger}/>
                            </div>
                                
                        </Grid>
                        <Grid item xs={6}>
                            <img src={loginPhoto} alt="" width="100%" height="100%"/>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    
    }
}
