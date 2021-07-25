import React from "react";
import "../../css/global.css";
import "../../css/posts.css";

import post from "../../images/posted_photo_1.png";
import userPp from "../../images/pp_2.png";

export default function Posts() {
  return (
    <div class="posts-wrapper">
      <div class="user-info-wrapper">
        <img src={userPp} id="pp-post" alt="Profile Image" />
        <p id="status-user-name" class="status">User Name</p>
      </div>
      <div class="post-image">
        <img src={post} id="post-image" alt="Post Image" />
      </div>
      <div class="options-wrapper">
        <p id="status-user-name" class="status">User Name</p>
      </div>

      {/* 
      <div class="user-info-wrapper">
        <img src={userPp} id="pp-post" alt="Profile Image" />
        </div>
      <div class="post-image">
        <img src={post} id="post-image" alt="Post Image" />
      </div>


      <div class="user-info-wrapper">
        <img src={userPp} id="pp-post" alt="Profile Image" />
        </div>
      <div class="post-image">
        <img src={post} id="post-image" alt="Post Image" />
      </div>


      <div class="user-info-wrapper">
        <img src={userPp} id="pp-post" alt="Profile Image" />
        </div>
      <div class="post-image">
        <img src={post} id="post-image" alt="Post Image" />
      </div>

      <div class="user-info-wrapper">
        <img src={userPp} id="pp-post" alt="Profile Image" />
        </div>
      <div class="post-image">
        <img src={post} id="post-image" alt="Post Image" />
      </div> */}
    </div>
  );
}
