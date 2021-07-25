import React, { Component } from "react";
// import Post from "../Post/Post";
import axios from "axios";
import "../../css/MainPage.css";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDatas: [
        {
          id:99,
          userName: "Celal Şengör",
          uderId: "128937218973129",
          timestamp: null,
          photoUrl: "https://i.sozcu.com.tr/wp-content/uploads//2018/03/iecrop/celal-sengor_16_9_1519982463.jpg",
          storyId: "219829831278912"
        }
      ],
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
