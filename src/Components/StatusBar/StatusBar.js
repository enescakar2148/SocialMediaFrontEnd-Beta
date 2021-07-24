import { Avatar } from '@material-ui/core'
import axios from 'axios';
import React, { Component } from 'react'
import "./StatusBar.css"

export default class StatusBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            storyDatas : []
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
