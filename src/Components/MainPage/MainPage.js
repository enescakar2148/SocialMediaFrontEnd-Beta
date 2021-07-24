import React, { Component } from "react";
import Post from "../Post/Post";
import axios from "axios";
import "../../css/MainPage.css";

export default class MainPage extends Component {
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
        // alert(err);
      });
  };

  render() {
    return (
      <div>
        {/* {this.state.postDatas.map((data) => {
          return <Post data={data} key={data.id} />;
        })} */}
      </div>
    );
  }
}
