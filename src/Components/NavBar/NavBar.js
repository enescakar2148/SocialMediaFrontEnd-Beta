// import { Avatar, Grid } from "@material-ui/core";
import React, { Component } from "react";
import "@fortawesome/fontawesome-free/js/all.js";
import uploadBtn from "../../images/upload.png";
import SharePostModal from '../Modals/SharePostModal';

import "../../css/global.css";
import "../../css/NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div class="nav-wrapper">
        {/* Search box */}
        <div class="search-bar">
          <input type="text" id="search-box" placeholder="Search" />
          <SharePostModal />
        </div>

        {/* Nav İcons */}
        <div class="nav-icons">
          <nav>
            <ul id="nav-list">
              <li class="nav-item">
              <a href="#" class="icon active"><i class="fas fa-home" id="home-icon"></i></a>
              </li>
              <li class="nav-item">
              <a href="#" class="icon"><i class="fas fa-users" id="team-icon"></i></a>
              </li>
              <li class="nav-item">
              <a href="#" class="icon"><i class="far fa-comments" id="messages-icon"></i></a>
              </li>
              <li class="nav-item">
              <a href="#" class="icon"><i class="far fa-bookmark" id="saved-post-icon"></i></a>
              </li>
              <li class="nav-item">
                <a href="#" class="icon"><i class="fas fa-cog" id="settings-icon"></i></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
