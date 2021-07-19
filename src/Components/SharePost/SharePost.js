import axios from 'axios';
import React, { Component } from 'react'
import "./SharePost.css"

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        // eslint-disable-next-line 
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

export default class SharePost extends Component {

    descListener = (event) => {
        this.desc = event.target.value
    }

    imgSourceListener = (event) => {
        this.imgSource = event.target.value
    }

    sharePost = () => {
        let bundle = {
            userName: "Celal Şengör",
            userId: uuidv4(),
            timestamp: null,
            photoUrl: this.imgSource,
            postId: uuidv4()
        }

        axios.post("http://localhost:8080/api/posts/new", bundle).then((response)=>  {
            alert("Başarılı")
        }).catch((err)=> {
            alert("Bir hata meydana geldi: "+ err)
        })
    }

    render() {
        return (
            <div>
                <div className="sharePostCard">
                    <div className="sharePostText">Share Post</div>
                    <div className="sharePostInputs">
                        <input type="file" placeholder="Photo" className="shareFileInput"/>
                        <input type="text" placeholder="Description" className="shareTextInput" onChange={this.descListener}/>
                    </div>
                    <div className="sharePostImgDiv">
                        <input type="text" placeholder="img link" className="tempInput" onChange={this.imgSourceListener}/>
                        <img className="sharePostImg" width="150px" height="150px" alt=""/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <button className="sharePostShareButton" onClick={this.sharePost} >Share</button>
                    </div>
                </div>
            </div>
        )
    }
}
