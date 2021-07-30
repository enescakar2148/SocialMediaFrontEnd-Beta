import React, { Component } from 'react'
import ReactCircleModal from 'react-circle-modal'
import pp1 from "../../images/pp_1.png";
import axios from 'axios';
import Loader from 'react-loader-spinner';
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

export default class ShareStoryModal extends Component {

    constructor(props){
      super(props)
      this.state = {
        loading: 0
      }
    }

    photoInputHandler = (event) => {
        this.file = event.target.files[0]
    }

    shareStoryButton = () => {
        if(this.file){
            this.setState({
              loading:1
            })

            let storageRef = storage.ref().child("stories").child(uuidv4())

            storageRef.put(this.file).then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url)=> {
                    let bundle = {
                        userName: "Celal Şengör",
                        userId: uuidv4(),
                        timestamp: null,
                        storyImageURL: url
                    }

                    axios.post("http://localhost:8080/api/stories/new", bundle).then((response)=> {
                      this.setState({
                        loading:0
                      })
                        alert("Başarılı");
                        window.location.reload();
                    }).catch((err)=>{
                        alert("Bir hata meydana geldi: "+err)
                    })
                })
            })
        }
    }

    render() {
        let button
        if(this.state.loading===0){
          button = <button className="sharePostShareButton" onClick={this.shareStoryButton} >Share</button>
        }else{
          button = <Loader type="Grid" color="#2fb3e1" width="40px" height="40px"/>
        }
        return (
            <ReactCircleModal
              backgroundColor="#2fb3e1"
              toogleComponent={onClick => (
                <img src={pp1} className="story-image" alt="Stories from All Followed" onClick={onClick}/>
              )}
              // Optional fields and their default values
              offsetX={0}
              offsetY={0}
            >
              {(onClick) => (
                <div style={{ backgroundColor: '#fff', padding: '1em', textAlign:'center', borderRadius:"5px", width:"50%", margin:"auto"}}>
                  <div>
                        <div className="sharePostCard">
                            <div className="sharePostText">Share Story</div>
                            <div className="sharePostInputs">
                                <input type="file" placeholder="Photo" className="shareFileInput" onChange={this.photoInputHandler}/>
                            </div>
                            <div className="sharePostImgDiv">
                                <img className="sharePostImg" width="150px" height="150px" alt=""/>
                            </div>
                            <div style={{textAlign:'center'}}>
                                {button}
                            </div>
                        </div>
                    </div>
                  <button onClick={onClick} >
                    Close
                  </button>
                </div>
              )}
            </ReactCircleModal>
        )
    }
}
