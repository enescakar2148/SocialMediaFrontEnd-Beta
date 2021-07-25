import { Avatar } from '@material-ui/core'
import axios from 'axios';
import React, { Component } from 'react'
import "./StatusBar.css"

export default class StatusBar extends Component {

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
            alert(err);
        });
    }

    render() {
        return (
            <div>
                <div className="statusBarCard">
                    {
                        this.state.storyDatas.map((obj) => {
                            return (<div className="statusDiv" key={obj.id}>
                                        <Avatar className="statusAvatar" src={obj.storyImageURL}/>
                                        <div className="usernameText" style={{textAlign:"center"}} >{obj.userName}</div>
                                    </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}
