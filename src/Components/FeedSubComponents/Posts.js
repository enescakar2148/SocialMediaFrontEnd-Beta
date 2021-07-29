import React, { Component } from "react";
import axios from "axios";
import "../../css/global.css";
import "../../css/posts.css";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDatas: [],
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
        alert(err);
      });

    let users;

    axios
      .get("http://localhost:8080/api/auth/users")
      .then((resp) => {
        users = resp.data;
        this.setState({
          usersData: users,
        });
        console.log(users);
      })
      .catch((err) => {
        alert(err);
      });
  };

  addTag = () => {
    this.getInputData();
  };
  getInputData = () => {
    const data = document.getElementById("comment-input").value;
    this.controleWord(data.charAt(0));
  };

  controleWord = (ch) => {
    if (ch === "@") {
      const result = this.connectApi();
      console.log(result)
    }
  };
  connectApi = () => {
    return this.state.usersData;
  };
  render() {
    return (
      <div class="posts-wrapper">
        {this.state.postDatas.map((data) => {
          return (
            <div key={data.photoUrl}>
              <div class="user-info-wrapper">
                <img
                  src={
                    "https://pbs.twimg.com/profile_images/1364515340424732674/Gh0U0xuU_400x400.jpg"
                  }
                  id="pp-post"
                  alt="Profile Image"
                  style={{ borderRadius: "100px" }}
                />
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
                    <li class="action-icon">
                      <i class="far fa-heart"></i>
                    </li>
                    <li class="action-icon">
                      <i class="far fa-comment"></i>
                    </li>
                    <li class="action-icon">
                      <i class="fas fa-share"></i>
                    </li>
                    <li class="action-icon">
                      <i class="far fa-bookmark"></i>
                    </li>
                  </ul>
                </div>
                <div class="texts">
                  <p id="option-user-name" class="status">
                    User Name
                  </p>
                  <p id="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
                <div className="comment-wrapper">
                  <input
                    type="text"
                    id="comment-input"
                    placeholder="Tag a Friends"
                  />
                  <button onClick={this.addTag} id="tag-button">
                    <i class="fas fa-chevron-right" id="tag-send-button"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
