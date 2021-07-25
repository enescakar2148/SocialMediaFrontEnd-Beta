import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Feed from '../Feed/Feed'
import "../../css/HomePage.css";
import LoginPage from '../LoginPage'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Feed />
            </div>
            
        )
    }
}
