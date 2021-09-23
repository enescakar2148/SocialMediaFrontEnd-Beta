import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Feed from '../Feed/Feed'
import "../../css/HomePage.css";
import LoginPage from '../LoginPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/home">
                            <NavBar />
                            <Feed />
                        </Route>
                        <Route path="/SocialMediaFrontEnd-Beta">
                            <LoginPage/>
                        </Route>
                        <Route path="/">
                            <LoginPage/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>

        )
    }
}
