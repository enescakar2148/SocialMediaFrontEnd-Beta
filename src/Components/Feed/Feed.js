import React, { Component } from 'react';
// import {Grid } from '@material-ui/core';
// import StatusBar from '../StatusBar/StatusBar';
// import MainPage from '../MainPage/MainPage';
// import SuggestionBox from '../SuggestionBox/SuggestionBox';
// import SharePost from '../SharePost/SharePost';
// import ShareStory from '../ShareStory/ShareStory';
import "../../css/Feed.css";
import "../../css/global.css";
import Posts from '../FeedSubComponents/Posts';
import Stories from '../FeedSubComponents/Stories';

export default class Feed extends Component {
    render() {
        return (
            <div class="feed-wrapper">
                <div class="left-section feed-content">
                    <h1>left</h1>
                </div>
                <div class="feed feed-content">
                    <Stories/>
                    <Posts/>
                </div>
                <div class="profile-section feed-content">
                </div>
                {/* <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>
                        <div>
                            <StatusBar/>
                            <MainPage/>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div>
                            <SuggestionBox/>
                            <SharePost/>
                            <ShareStory/>
                        </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid> */}
            </div>
        )
    }
}
