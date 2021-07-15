import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'
import "./StatusBar.css"

export default class StatusBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            storyDatas : []
        }
    }

    getStoryData = () => {
        let storyData =[
            {
                username: "atamert",
                img: ""
            },
            {
                username: "mert",
                img:""
            }
        ]
        return storyData
    }

    componentDidMount = () => {
        this.setState({
            storyDatas : this.getStoryData()
        })
    }

    render() {
        return (
            <div>
                <div className="statusBarCard">
                    {
                        this.state.storyDatas.map((obj) => {
                            return (<div className="statusDiv" key={obj.username}>
                                        <Avatar className="statusAvatar"/>
                                        <div className="usernameText" style={{textAlign:"center"}} >{obj.username}</div>
                                    </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}
