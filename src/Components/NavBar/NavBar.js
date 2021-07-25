// import { Avatar, Grid } from "@material-ui/core";
import React, { Component } from "react";
import "@fortawesome/fontawesome-free/js/all.js";
import uploadBtn from "../../images/upload.png";
import "../../css/NavBar.css";
import "../../css/global.css";
import "../../css/global.css";

// İcons
import home from "../../images/home.png";
import team from "../../images/team.png";
import messages from "../../images/messages.png";
import savedPost from "../../images/saved_post.png";
import check from "../../images/check.png";
import settings from "../../images/settings.png";

export default class NavBar extends Component {
  render() {
    return (
      <div class="nav-wrapper">
        {/* Search box */}
        <div class="search-bar">
          <input type="text" id="search-box" placeholder="Search" />
          <img src={uploadBtn} id="btn-upload" />
        </div>

        {/* Nav İcons */}
        <div class="nav-icons">
          <nav>
            <ul id="nav-list">
              <li class="nav-item">
              <a href="#"><img src={home} id="home-icon" class="icon active"/></a>
              </li>
              <li class="nav-item">
              <a href="#"><img src={team} id="team-icon" class="icon active"/></a>
              </li>
              <li class="nav-item">
              <a href="#"><img src={messages} id="messages-icon" class="icon active"/></a>
              </li>
              <li class="nav-item">
              <a href="#"><img src={savedPost} id="saved-post-icon" class="icon active"/></a>
              </li>
              <li class="nav-item">
                <a href="#"><img src={settings} id="settings-icon" class="icon active"/></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      // KAANIN YAZIDIĞI KOD
      // BENİMKİ BİTENE KADAR DURSUN
      // <div className="navWrapper">
      //     <div className="navBarContent">
      //         <Grid container>
      //             <Grid item xs={2}>

      //             </Grid>
      //             <Grid item xs={2}>
      //                 <h1 className="appName">APP NAME</h1>
      //             </Grid>
      //             <Grid item xs={4} style={{textAlign:'center'}}>
      //                 <div className="searchDiv" >
      //                     <i className="fas fa-search" style={{marginLeft:"5px", height:"12px"}}></i>
      //                     <input type="text" placeholder="Search" className="searchInput" />
      //                 </div>
      //             </Grid>
      //             <Grid item xs={2} style={{display:'flex', justifyContent: 'flex-end'}}>
      //                 <i className="fas fa-concierge-bell navIcon" style={{width:"25px", height:"25px"}}></i>
      //                 <Avatar className="navIcon"/>
      //             </Grid>
      //             <Grid item xs={2}>

      //             </Grid>
      //         </Grid>
      //     </div>
      // </div>
    );
  }
}
