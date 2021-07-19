import { Avatar } from '@material-ui/core'
import React, { Component } from 'react'
import "./SuggestionBox.css"
import SuggestionComp from '../SuggestionComp/SuggestionComp'

export default class SuggestionBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            suggestionDatas: []
        }
    }

    getSuggestionData = () => {
        let data = [
            {
                username: "Celal Şengör",
                img: "https://i2.milimaj.com/i/milliyet/75/0x0/5e8e2a735542800430dc7323.gif",
                id:0
            },
            {
                username: "İlber Ortaylı",
                img: "https://www.businessworldglobal.com/wp-content/uploads/2019/08/ilber-ortayli-555x305.jpg",
                id:1
            },
            {
                username: "Fatih Altaylı",
                img: "https://odatv4.com/images/2020_06/2020_06_09/fatih-altayli-korkuyorum-09062034_l2.jpg",
                id:2
            },
            {
                username: "Celal Şengör",
                img: "https://i2.milimaj.com/i/milliyet/75/0x0/5e8e2a735542800430dc7323.gif",
                id:3
            },
            {
                username: "İlber Ortaylı",
                img: "https://www.businessworldglobal.com/wp-content/uploads/2019/08/ilber-ortayli-555x305.jpg",
                id:4
            },
            {
                username: "Fatih Altaylı",
                img: "https://odatv4.com/images/2020_06/2020_06_09/fatih-altayli-korkuyorum-09062034_l2.jpg",
                id:5
            },
            {
                username: "Celal Şengör",
                img: "https://i2.milimaj.com/i/milliyet/75/0x0/5e8e2a735542800430dc7323.gif",
                id:6
            },
            {
                username: "İlber Ortaylı",
                img: "https://www.businessworldglobal.com/wp-content/uploads/2019/08/ilber-ortayli-555x305.jpg",
                id:7
            },
            {
                username: "Fatih Altaylı",
                img: "https://odatv4.com/images/2020_06/2020_06_09/fatih-altayli-korkuyorum-09062034_l2.jpg",
                id:8
            },
            {
                username: "Celal Şengör",
                img: "https://i2.milimaj.com/i/milliyet/75/0x0/5e8e2a735542800430dc7323.gif",
                id:9
            },
            {
                username: "İlber Ortaylı",
                img: "https://www.businessworldglobal.com/wp-content/uploads/2019/08/ilber-ortayli-555x305.jpg",
                id:10
            },
            {
                username: "Fatih Altaylı",
                img: "https://odatv4.com/images/2020_06/2020_06_09/fatih-altayli-korkuyorum-09062034_l2.jpg",
                id:11
            }
        ]

        return data
    }

    componentDidMount = () => {
        this.setState({
            suggestionDatas: this.getSuggestionData()
        })
    }

    render() {
        return (
            <div>
                <div className="suggestionCard">
                    <div className="userCard">
                        <div className="userCardDiv">
                            <Avatar className="userCardAvatar"/>
                        </div>
                        <div className="userCardText">Username</div>
                    </div>
                    <div className="sugText">Suggestions For You</div>
                    <div className="suggestionsCard">
                        {this.state.suggestionDatas.map((obj) => {
                            return (<SuggestionComp data={obj} key={obj.id}/>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
