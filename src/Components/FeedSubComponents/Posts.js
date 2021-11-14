import React, { Component } from "react";
import "../../css/global.css";
import "../../css/posts.css";
import pp from "../../images/enespp.jpg"
import enes from "../../images/enes.jpg";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDatas: [
        {
          id: 1001,
          userName: "Enes Çakar",
          userId: "123",
          postImageUrl: enes,
          timestamp: null,
          postId: "138218921721897218932",
          pp: pp
      },
      {
          id: 1002,
          userName: "Başak Parlak",
          userId: "456",
          postImageUrl: "https://diziseti.tv/wp-content/uploads/2018/03/Ba%C5%9Fak-Parlak-%C5%9Fevkat-yerimdardan-neden-ayr%C4%B1ld%C4%B1.jpg",
          timestamp: null,
          postId: "1382189217218972189325",
          pp: "http://demo.naria.com.tr/ahmetkoralturk/upload/01_15c76a7becaebe.jpg"
      },
      {
          id: 1003,
          userName: "Hadise",
          userId: "789",
          postImageUrl: "https://img-s1.onedio.com/id-60ab9d868028a34f0a5d6a33/rev-0/w-620/f-jpg/s-33ec58ed04edf317f1d8081e57a92cc1399c5a03.jpg",
          timestamp: null,
          postId: "1382189217218972189324",
          pp: "https://i2.milimaj.com/i/milliyet/75/750x0/612f301586b245361c23fe86"
      }
      ],
      tags: []
    };
  }

  componentDidMount = () => {

    //BU KISIM SPRING BOOT İLE YAZDIĞIMIZ BACK-END İLE ÇALIŞTIĞI İÇİN DEVRE DIŞI BIRAKILDI

    /* Getting post datas from api */
    // let data;
    // axios
    //   .get("http://localhost:8080/api/posts")
    //   .then((resp) => {
    //     data = resp.data;
    //     this.setState({
    //       postDatas: data,
    //     });
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
    // /* Getting all the users that sign upped from api */
    // let users;
    // axios
    //   .get("http://localhost:8080/api/auth/users")
    //   .then((resp) => {
    //     users = resp.data;
    //     this.setState({
    //       usersData: users,
    //     });
    //     console.log(users);
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });

    // /* Getting all the tags from api */
    // let tags;
    // axios
    //   .get("http://localhost:8080/api/tags/")
    //   .then((resp) => {
    //     tags = resp.data;
    //     this.setState({
    //       tags: tags,
    //     });
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
  };

  render() {
      return (
        <div class="posts-wrapper">
          {this.state.postDatas.map((data) => {
            return (
              <div key={data.postId}>
                <div class="user-info-wrapper">
                  <img
                    src={
                      data.pp
                    }
                    id="pp-post"
                    alt="Profile Image"
                  />
                  <p id="status-user-name" class="status">
                  {data.userName}
                  </p>
                </div>
                <div class="post-image">
                  <img src={data.postImageUrl} id="post-image" alt="Post Image" />
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
                      {data.userName}
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
                      list="usernames"
                      id="comment-input"
                      placeholder="Tag a Friends"
                    />
                    <button id="tag-button">
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
