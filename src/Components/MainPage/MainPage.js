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
                username: "Celal Şengör",
                likes: 278,
                comments: ["İlber Hoca: Vaay kardeşim fenasın yine"],
                img: "https://pbs.twimg.com/profile_images/1364515340424732674/Gh0U0xuU_400x400.jpg"
            },
            {
                username: "Celal Şengör",
                likes: 278,
                comments: ["İlber Hoca: Adam adam"],
                img: "https://mir-s3-cdn-cf.behance.net/projects/404/f47c23117147779.Y3JvcCwxNzQ1LDEzNjUsMTUxLDA.jpg"
            },
            {
                username: "Celal Şengör",
                likes: 278,
                comments: ["İlber Hoca: Vaay kardeşim fenasın yine"],
                img: "https://i.sozcu.com.tr/wp-content/uploads//2018/03/iecrop/celal-sengor_16_9_1519982463.jpg"
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
