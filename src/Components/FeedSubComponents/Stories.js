import React, { Component } from "react";
import "../../css/stories.css";
import "../../css/global.css";
import enes from "../../images/enes.jpg";
import ShowStoryModal from "../Modals/ShowStoryModal";
import pp from "../../images/enespp.jpg";

export default class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyDatas: [
        {
          id: 1001,
          userName: "Enes Çakar",
          userId: "123",
          storyImageURL: enes,
          timestamp: null,
          postId: "138218921721897218932",
          pp: pp,
        },
        {
          id: 1002,
          userName: "Başak Parlak",
          userId: "456",
          storyImageURL:
            "https://diziseti.tv/wp-content/uploads/2018/03/Ba%C5%9Fak-Parlak-%C5%9Fevkat-yerimdardan-neden-ayr%C4%B1ld%C4%B1.jpg",
          timestamp: null,
          postId: "1382189217218972189325",
          pp: "http://demo.naria.com.tr/ahmetkoralturk/upload/01_15c76a7becaebe.jpg",
        },
        {
          id: 1003,
          userName: "Hadise",
          userId: "789",
          storyImageURL:
            "https://img-s1.onedio.com/id-60ab9d868028a34f0a5d6a33/rev-0/w-620/f-jpg/s-33ec58ed04edf317f1d8081e57a92cc1399c5a03.jpg",
          timestamp: null,
          postId: "1382189217218972189324",
          pp: "https://i2.milimaj.com/i/milliyet/75/750x0/612f301586b245361c23fe86",
        },
      ],
    };
  }

  render() {
    /* Setting order variable to -1 for future use in stories */
    this.order = -1;
    return (
      <div class="stories-wrapper">
        <ul id="story-container">
          <li class="story">
              
          </li>

          {this.state.storyDatas.map((data) => {
            //Mapping story datas and creating a list item for each
            this.order += 1;
            return (
              <li key={data.postId} class="story">
                <ShowStoryModal
                  data={data}
                  order={this.order}
                  storyDatas={this.state.storyDatas}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
