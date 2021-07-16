import React, { Component } from 'react'
import "./MainPage.css"
import Post from '../Post/Post'

export default class MainPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            postDatas: []
        }
    }

    getPosts = () => {
        let data = [
            {
                username: "Atamert",
                likes: 278,
                comments: ["İlber Hoca: Vaay kardeşim fenasın yine"],
                img: "https://pbs.twimg.com/profile_images/1364515340424732674/Gh0U0xuU_400x400.jpg"
            },
            {
                username: "Mert",
                likes: 278,
                comments: ["İlber Hoca: Adam adam"],
                img: "https://pbs.twimg.com/profile_images/1364515340424732674/Gh0U0xuU_400x400.jpg"
            },
            {
                username: "Berk",
                likes: 278,
                comments: ["İlber Hoca: Vaay kardeşim fenasın yine"],
                img: "https://pbs.twimg.com/profile_images/1364515340424732674/Gh0U0xuU_400x400.jpg"
            }
        ]

        return data
    }

    componentDidMount = () => {
        this.setState({
            postDatas: this.getPosts()
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.postDatas.map((data) => {
                        return (
                            <Post data={data} key={data.username}/>
                        )
                    })
                }
            </div>
        )
    }
}
