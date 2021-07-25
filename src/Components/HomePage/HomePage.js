import React, { Component } from 'react'
import "./HomePage.css"
import NavBar from '../NavBar/NavBar'
import Feed from '../Feed/Feed'
import Modal from '../Portal/Modal'
import LoginPage from '../LoginPage'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <LoginPage />
            </div>
            
        )
    }
}
