import React from "react";
import "../../css/global.css";
import "../../css/profile.css";

import pp from '../../images/pp_1.png'


export default function Profile() {
  return (
    <div class="profile-wrapper">
      <h1 id="account">Hesap</h1>
      {/* Profile photo and follow numbers */}
      <div class="profile-details-wrapper">
        <div class="pp-section">
          <img src={pp} alt="Profile Image" id="pp" />
        </div>
        <div class="user-datas-section">
          <h1 id="user-name">Emre Akın</h1>
        </div>
        <div class="datas">
          <p class="data">450 Followers</p>
          <p class="data">250 Follow</p>
        </div>
      </div>

      {/* Activities */}
      <div class="explore">
        <div class="notification">
          <i class="far fa-bell"></i>
          <p id="title">Lorem Kişisi fotoğrafını beğendi.</p>
        </div>

        <div class="notification">
          <i class="far fa-bell"></i>
          <p id="title">Lorem Kişisi fotoğrafını beğendi.</p>
        </div>

        <div class="notification">
          <i class="far fa-bell"></i>
          <p id="title">Lorem Kişisi fotoğrafını beğendi.</p>
        </div>

        <div class="notification">
          <i class="far fa-bell"></i>
          <p id="title">Lorem Kişisi fotoğrafını beğendi.</p>
        </div>

        <div class="notification">
          <i class="far fa-bell"></i>
          <p id="title">Lorem Kişisi fotoğrafını beğendi.</p>
        </div>

        <div class="notification">
          <i class="far fa-bell"></i>
          <p id="title">Lorem Kişisi fotoğrafını beğendi.</p>
        </div>

        <div class="notification">
          <i class="far fa-bell"></i>
          <p id="title">Lorem Kişisi fotoğrafını beğendi.</p>
        </div>

        <div class="notification">
          <i class="far fa-bell"></i>
          <p id="title">Lorem Kişisi fotoğrafını beğendi.</p>
        </div>

        <div class="notification">
          <i class="far fa-bell"></i>
          <p id="title">Lorem Kişisi fotoğrafını beğendi.</p>
        </div>
      </div>
    </div>
  );
}
