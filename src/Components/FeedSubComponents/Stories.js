import React, {Component}from 'react'
import axios from 'axios';
import "../../css/stories.css";
import "../../css/global.css";
import pp1 from "../../images/pp_1.png";
import pp2 from "../../images/pp_2.png";
import ShareStoryModal from '../Modals/ShareStoryModal';

export default class Stories extends Component {

    constructor(props){
        super(props);
        this.state = {
            storyDatas : [
                {
                    id: 999,
                    userName: "Celal Şengör",
                    userId: "89123721987213",
                    storyImageURL: "https://i.sozcu.com.tr/wp-content/uploads//2018/03/iecrop/celal-sengor_16_9_1519982463.jpg",
                    timestamp: null,
                    postId: "138218921721897218932"
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
    return (
        <div class="stories-wrapper">
            <ul id="story-container">
                <li class="story">
                    <ShareStoryModal />
                    <p class="story-user-name">Sen</p>
                </li>

                
                {this.state.storyDatas.map((data)=> {
                    return(
                        <li key={data.postId} class="story">
                            <img src={data.storyImageURL} datas={data} class="story-image" alt="Stories from All Followed"/>
                            <p class="story-user-name">{data.userName}</p>
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
