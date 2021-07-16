import React, { Component } from 'react'
import "./SharePost.css"

export default class SharePost extends Component {
    render() {
        return (
            <div>
                <div className="sharePostCard">
                    <div className="sharePostText">Share Post</div>
                    <div className="sharePostInputs">
                        <input type="file" placeholder="Photo" className="shareFileInput"/>
                        <input type="text" placeholder="Description" className="shareTextInput"/>
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
