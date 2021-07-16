import { Avatar, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import "./SuggestionComp.css"



export default class SuggestionComp extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={9}>
                        <div className="SuggestionCompCard">
                            <div className="SuggestionCompCardDiv">
                                <Avatar className="SuggestionCompCardAvatar" src={this.props.data.img}/>
                            </div>
                            <div className="SuggestionCompCardText">{this.props.data.username}</div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="SuggestionCompCardFollowText">Follow</div>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}
