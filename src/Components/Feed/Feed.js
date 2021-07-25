import React, { Component } from 'react';
import "../../css/Feed.css";
import "../../css/global.css";
import LeftSection from '../FeedSubComponents/LeftSection';
import Posts from '../FeedSubComponents/Posts';
import Profile from '../FeedSubComponents/Profile';
import Stories from '../FeedSubComponents/Stories';

export default class Feed extends Component {
    render() {
        return (
            <div class="feed-wrapper">
                <div class="left-section feed-content">
                    <LeftSection/>
                </div>
                <div class="feed feed-content">
                    <Stories/>
                    <Posts/>
                </div>
                <div class="profile-section feed-content">
                    <Profile/>
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
