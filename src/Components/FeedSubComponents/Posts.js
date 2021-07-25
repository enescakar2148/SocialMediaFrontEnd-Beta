import React, {Component} from "react";
import axios from "axios";
import "../../css/global.css";
import "../../css/posts.css";

import post from "../../images/posted_photo_1.png";
import userPp from "../../images/pp_2.png";

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postDatas: []
    };
  }

  componentDidMount = () => {
    let data;

    axios
      .get("http://localhost:8080/api/posts")
      .then((resp) => {
        data = resp.data;
        this.setState({
            postDatas: data,
        });
      })
      .catch((err) => {
        // alert(err);
      });
  };

  render() {
    return (
      <div class="posts-wrapper">
        {this.state.postDatas.map((data)=> {
          return (<div key={data.photoUrl}><div class="user-info-wrapper">
              <img src={"https://pbs.twimg.com/profile_images/1364515340424732674/Gh0U0xuU_400x400.jpg"} id="pp-post" alt="Profile Image" style={{borderRadius:"100px"}} />
              <p id="status-user-name" class="status">
                {data.userName}
              </p>
            </div>
            <div class="post-image">
              <img src={data.photoUrl} id="post-image" alt="Post Image" />
            </div>
            <div class="options-wrapper">
              <div class="actions">
                  <ul class="action-icons">
                      <li class="action-icon"><i class="far fa-heart"></i></li>
                      <li class="action-icon"><i class="far fa-comment"></i></li>
                      <li class="action-icon"><i class="fas fa-share"></i></li>
                      <li class="action-icon"><i class="far fa-bookmark"></i></li>
                  </ul>
              </div>
              <div class="texts">
                <p id="option-user-name" class="status">
                  User Name
                </p>
                <p id="description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s
                </p>
              </div>
            </div>
            </div>
          )
        })}
      </div>
    )}
}

/*
<div class="user-info-wrapper">
        <img src={userPp} id="pp-post" alt="Profile Image" />
        <p id="status-user-name" class="status">
          User Name
        </p>
      </div>
      <div class="post-image">
        <img src={post} id="post-image" alt="Post Image" />
      </div>
      <div class="options-wrapper">
        <div class="actions">
            <ul class="action-icons">
                <li class="action-icon"><i class="far fa-heart"></i></li>
                <li class="action-icon"><i class="far fa-comment"></i></li>
                <li class="action-icon"><i class="fas fa-share"></i></li>
                <li class="action-icon"><i class="far fa-bookmark"></i></li>
            </ul>
        </div>
        <div class="texts">
          <p id="option-user-name" class="status">
            User Name
          </p>
          <p id="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      
      <div class="user-info-wrapper">
        <img src={userPp} id="pp-post" alt="Profile Image" />
        <p id="status-user-name" class="status">
          User Name
        </p>
      </div>
      <div class="post-image">
        <img src={post} id="post-image" alt="Post Image" />
      </div>
      <div class="options-wrapper">
        <div class="actions">
            <ul class="action-icons">
                <li class="action-icon"><i class="far fa-heart"></i></li>
                <li class="action-icon"><i class="far fa-comment"></i></li>
                <li class="action-icon"><i class="fas fa-share"></i></li>
                <li class="action-icon"><i class="far fa-bookmark"></i></li>
            </ul>
        </div>
        <div class="texts">
          <p id="option-user-name" class="status">
            User Name
          </p>
          <p id="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      
      <div class="user-info-wrapper">
        <img src={userPp} id="pp-post" alt="Profile Image" />
        <p id="status-user-name" class="status">
          User Name
        </p>
      </div>
      <div class="post-image">
        <img src={post} id="post-image" alt="Post Image" />
      </div>
      <div class="options-wrapper">
        <div class="actions">
            <ul class="action-icons">
                <li class="action-icon"><i class="far fa-heart"></i></li>
                <li class="action-icon"><i class="far fa-comment"></i></li>
                <li class="action-icon"><i class="fas fa-share"></i></li>
                <li class="action-icon"><i class="far fa-bookmark"></i></li>
            </ul>
        </div>
        <div class="texts">
          <p id="option-user-name" class="status">
            User Name
          </p>
          <p id="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      
*/
