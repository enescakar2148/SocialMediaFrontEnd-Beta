import React, { Component } from 'react'
import "./HomePage.css"
import NavBar from '../NavBar/NavBar'
import Feed from '../Feed/Feed'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Feed/>
            </div>
        )
    }
}
