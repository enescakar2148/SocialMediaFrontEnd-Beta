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
                    {/* Teams, friends and suggestions are in this component */}
                    <LeftSection/>
                </div>
                <div class="feed feed-content">
                    {/* Stories, share story modal and share story modal are in this component */}
                    <Stories/>
                    {/* Posts and tag system are in this component */}
                    <Posts/>
                </div>
                <div class="profile-section feed-content">
                    <Profile/>
                </div>
            </div>
        )
    }
}
