import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import ReactCircleModal from "react-circle-modal";
import "../../css/showStory.css";

export default class ShowStoryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.order,
      imgUrl: this.props.storyDatas[this.props.order].storyImageURL,
      userName: this.props.storyDatas[this.props.order].userName,
    };
  }

  componentDidMount = () => {
    this.size = 0;
    this.props.storyDatas.forEach((element) => {
      this.size += 1;
    });
  };

  nextButtonFunc = () => {
    if (this.state.order < this.size - 1) {
      this.setState({
        order: this.state.order + 1,
        imgUrl: this.props.storyDatas[this.state.order + 1].storyImageURL,
        userName: this.props.storyDatas[this.state.order + 1].userName,
      });
    }
  };

  prevButtonFunc = () => {
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order + -1,
        imgUrl: this.props.storyDatas[this.state.order - 1].storyImageURL,
        userName: this.props.storyDatas[this.state.order - 1].userName,
      });
    }
  };

  render() {
    return (
      <ReactCircleModal
        backgroundColor="transparent"
        toogleComponent={(onClick) => (
          <div onClick={onClick}>
            <img
              src={this.props.data.storyImageURL}
              datas={this.props.data}
              class="story-image"
              alt="Stories from All Followed"
            />
            <p class="story-user-name">{this.props.data.userName}</p>
          </div>
        )}
        // Optional fields and their default values
        offsetX={0}
        offsetY={0}
      >
        {(onClick) => (
          <div className="show-story-wrapper">
            <div className="btn-previus">
              <button onClick={this.prevButtonFunc} id="previus" className="story-show-btn">
              <i class="fas fa-angle-left"></i>
              </button>
            </div>
            <div className="story-content">
              <div className="story-toolbar">
                <h1 id="story-user-name">{this.state.userName}</h1>
                <button onClick={onClick} id="btn-close">
                <i class="fas fa-times-circle"></i>
                </button>
              </div>
              <img src={this.state.imgUrl} id="story-image" />
            </div>
            <div className="btn-next">
              <button onClick={this.nextButtonFunc} id="previus" className="story-show-btn">
                <i class="fas fa-angle-right"></i>
              </button>
            </div>
          </div>
        )}
      </ReactCircleModal>
    );
  }
}
