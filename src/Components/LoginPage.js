import { Grid } from '@material-ui/core';
import React, { Component } from 'react'
import SignIn from './SignIn/SignIn';
import SignUp from './SingUp/SignUp';
import "./LoginPage.css"

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
                    <Grid item xs={6}>
                        <div>
                            <SignIn/>
                        </div>
                            
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </div>
        )
    }
}
