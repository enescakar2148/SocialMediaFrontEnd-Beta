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
