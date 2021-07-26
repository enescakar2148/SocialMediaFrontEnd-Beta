import React, {Component}from 'react'
import axios from 'axios';
import "../../css/stories.css";
import "../../css/global.css";
import pp1 from "../../images/pp_1.png";
import pp2 from "../../images/pp_2.png";
import ShareStoryModal from '../Modals/ShareStoryModal';
import ShowStoryModal from '../Modals/ShowStoryModal';

export default class Stories extends Component {

    constructor(props){
        super(props);
        this.state = {
            storyDatas : [
                {
                    id: 1001,
                    userName: "Celal Şengör",
                    userId: "89123721987213",
                    storyImageURL: "https://i.sozcu.com.tr/wp-content/uploads//2018/03/iecrop/celal-sengor_16_9_1519982463.jpg",
                    timestamp: null,
                    postId: "138218921721897218932"
                },
                {
                    id: 1002,
                    userName: "Celal Şengör",
                    userId: "891237219872133",
                    storyImageURL: "https://foto.sondakika.com/haber/2020/08/11/eduard-suess-madalyasi-prof-dr-celal-sengor-e-13496875_osd.jpg",
                    timestamp: null,
                    postId: "1382189217218972189325"
                },
                {
                    id: 1003,
                    userName: "Celal Şengör",
                    userId: "891237219872132",
                    storyImageURL: "https://cdntr1.img.sputniknews.com/img/103892/13/1038921346_0:0:1200:675_1200x675_80_0_0_2635ff037d0dc4d3b10e1769e83e74d2.jpg",
                    timestamp: null,
                    postId: "1382189217218972189324"
                }
            ]
        }
    }

    componentDidMount = () => {
        let data;

        axios
        .get("http://localhost:8080/api/stories")
        .then((resp) => {
            data = resp.data;
            this.setState({
                storyDatas: data,
            });
        })
        .catch((err) => {
            // alert(err);
        });
    }
    
    render(){
        this.order = -1
    return (
        <div class="stories-wrapper">
            <ul id="story-container">
                <li class="story">
                    <ShareStoryModal />
                    <p class="story-user-name">Sen</p>
                </li>

                
                {this.state.storyDatas.map((data)=> {
                    this.order += 1
                    return(
                        <li key={data.postId} class="story" >
                            <ShowStoryModal data={data} order={this.order} storyDatas={this.state.storyDatas} />
                        </li>
                    )
                })}


                <li class="story">
                    <img src={pp2} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">Ahmet Köse</p>
                </li>
                <li class="story">
                    <img src={pp1} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">Selman Veli</p>
                </li>
                <li class="story">
                    <img src={pp2} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">Ahmet Köse</p>
                </li>
                <li class="story">
                    <img src={pp1} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">Selman Veli</p>
                </li>
                <li class="story">
                    <img src={pp2} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">Ahmet Köse</p>
                </li>
                <li class="story">
                    <img src={pp1} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">Selman Veli</p>
                </li>
                <li class="story">
                    <img src={pp2} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">Ahmet Köse</p>
                </li>
                <li class="story">
                    <img src={pp1} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">Selman Veli</p>
                </li>
                <li class="story">
                    <img src={pp2} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">Ahmet Köse</p>
                </li>
                <li class="story">
                    <img src={pp1} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">Selman Veli</p>
                </li>
            </ul>
        </div>
    )}
}
