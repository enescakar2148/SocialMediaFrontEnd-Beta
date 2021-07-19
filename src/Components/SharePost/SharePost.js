import axios from 'axios';
import React, { Component } from 'react'
import "./SharePost.css"
import firebase from "firebase";
// Required for side-effects
require("firebase/firestore");
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAMrpDyNKZGKEUJ8Qv-KUvpzxcSxV4bQ8M",
    authDomain: "qigatask.firebaseapp.com",
    projectId: "qigatask",
    storageBucket: "qigatask.appspot.com",
  });
} else {
  firebase.app(); // if already initialized, use that one
}
var storage = firebase.storage();

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
        if(this.file){
            let storageRef = storage.ref().child("posts").child(uuidv4())

            storageRef.put(this.file).then((snapshot)=> {
                snapshot.ref.getDownloadURL().then((url)=>{
                    let bundle = {
                        userName: "Celal Şengör",
                        userId: uuidv4(),
                        timestamp: null,
                        photoUrl: url,
                        postId: uuidv4()
                    }

                    axios.post("http://localhost:8080/api/posts/new", bundle).then((response)=>  {
                        alert("Başarılı")
                    }).catch((err)=> {
                        alert("Bir hata meydana geldi: "+ err)
                    })
                })
            })
        }
    }

    photoInputHandler = (event) => {
        this.file = event.target.files[0]
    }

    render() {
        return (
            <div>
                <div className="sharePostCard">
                    <div className="sharePostText">Share Post</div>
                    <div className="sharePostInputs">
                        <input type="file" placeholder="Photo" className="shareFileInput" onChange={this.photoInputHandler}/>
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
