import { Avatar, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import "./NavBar.css"
import '@fortawesome/fontawesome-free/js/all.js';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navBarContent">
                    <Grid container>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={2}>
                            <h1 className="appName">APP NAME</h1>
                        </Grid>
                        <Grid item xs={4} style={{textAlign:'center'}}>
                            <div className="searchDiv" >
                                <i className="fas fa-search" style={{marginLeft:"5px", height:"12px"}}></i>
                                <input type="text" placeholder="Search" className="searchInput" />
                            </div>
                        </Grid>
                        <Grid item xs={2} style={{display:'flex', justifyContent: 'flex-end'}}>
                            <i className="fas fa-concierge-bell navIcon" style={{width:"25px", height:"25px"}}></i>
                            <Avatar className="navIcon"/>
                        </Grid>
                        <Grid item xs={2}>

                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
