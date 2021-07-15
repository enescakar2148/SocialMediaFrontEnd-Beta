import React, { Component } from 'react'
import "./Feed.css"
import {Grid } from '@material-ui/core'
import StatusBar from '../StatusBar/StatusBar'
import MainPage from '../MainPage/MainPage'

export default class Feed extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>
                        <div>
                            <StatusBar/>
                            <MainPage/>
                        </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
        )
    }
}
