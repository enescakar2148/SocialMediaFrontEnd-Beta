import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'
import "./Post.css"


export default class Post extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="postCard">
                <div className="postHeader">
                    <Avatar className="postAvatar"/>
                    <div className="postAvatarUsername">{this.props.data.username}</div>
                </div>
                <div>
                    <img width="615px" alt="Post" src={this.props.data.img}/>
                </div>
                <div>
                    <div className="iconContainer">
                        <i className="far fa-heart postIcon"></i>
                        <i className="far fa-comment postIcon"></i>
                        <i className="far fa-share-square postIcon"></i>
                    </div>
                    <div className="postLikeText">
                        {this.props.data.likes}
                    </div>
                </div>
                <div>
                    {this.props.data.comments.map((obj)=>{
                        return (
                            <div className="comment" key={obj}>{obj}</div>
                        )
                    })}
                    <input className="commentInput" type="text" placeholder="Add a comment"/>
                </div>
            </div>
        )
    }
}
