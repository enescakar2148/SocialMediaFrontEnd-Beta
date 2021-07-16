import React, { Component } from 'react'
import "./ShareStory.css"

export default class ShareStory extends Component {
    render() {
        return (
            <div>
                <div className="sharePostCard">
                    <div className="sharePostText">Share Stroy</div>
                    <div className="sharePostInputs">
                        <input type="file" placeholder="Photo" className="shareFileInput"/>
                    </div>
                    <div className="sharePostImgDiv">
                        <input type="text" placeholder="img link" className="tempInput" />
                        <img className="sharePostImg" width="150px" height="150px" alt=""/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <button className="sharePostShareButton" >Share</button>
                    </div>
                </div>
            </div>
        )
    }
}
