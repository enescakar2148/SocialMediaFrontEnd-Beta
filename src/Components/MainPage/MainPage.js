import React, { Component } from 'react'
import "./MainPage.css"
import Post from '../Post/Post'
import axios from 'axios';

export default class MainPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            postDatas: []
        }
    }

    componentDidMount = () => {
        let data
        axios.get("localhost:8080/api/posts").then((resp)=>{
            data = resp

            this.setState({
                postDatas: data
            })
        }).catch((err)=>{
            alert("Bir hata meydana geldi")
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.postDatas.map((data) => {
                        return (
                            <Post data={data} key={data.id}/>
                        )
                    })
                }
            </div>
        )
    }
}
