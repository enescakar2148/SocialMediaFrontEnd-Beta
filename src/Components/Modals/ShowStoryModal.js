import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import ReactCircleModal from 'react-circle-modal'

export default class ShowStoryModal extends Component {

    constructor(props){
        super(props)
        this.state = {
            order: this.props.order,
            imgUrl: this.props.storyDatas[this.props.order].storyImageURL,
            userName: this.props.storyDatas[this.props.order].userName
        }
    }

    componentDidMount = () => {
        this.size = 0
        this.props.storyDatas.forEach(element => {
            this.size += 1
        });
    }

    nextButtonFunc = () => {
        if(this.state.order<this.size-1){
            this.setState({
                order: this.state.order + 1,
                imgUrl: this.props.storyDatas[this.state.order + 1].storyImageURL,
                userName: this.props.storyDatas[this.state.order + 1].userName
            })
        }
    }

    prevButtonFunc = () => {
        if(this.state.order>0){
            this.setState({
                order: this.state.order + -1,
                imgUrl: this.props.storyDatas[this.state.order -1].storyImageURL,
                userName: this.props.storyDatas[this.state.order -1].userName
            })
        }
    }

    render() {
        return (
            <ReactCircleModal
              backgroundColor="#2fb3e1"
              toogleComponent={onClick => (
                <div onClick={onClick}>
                    <img src={this.props.data.storyImageURL}  datas={this.props.data} class="story-image" alt="Stories from All Followed"/>
                    <p class="story-user-name">{this.props.data.userName}</p>
                </div>
              )}
              // Optional fields and their default values
              offsetX={0}
              offsetY={0}
            >
              {(onClick) => (
                  <Grid container >
                      <Grid item xs={1} style={{ textAlign:'center', margin:"auto"}}>
                            <button onClick={this.prevButtonFunc} >
                                Previus
                            </button>
                      </Grid>
                      <Grid item xs={10}>
                        <div style={{ textAlign:'center', margin:"auto"}}>
                            <div >
                                <div> {this.state.userName} </div>
                                <img src={this.state.imgUrl} style={{borderRadius:"50px", maxWidth:"80%"}} />
                            </div>
                            
                            <button onClick={onClick} >
                                Close
                            </button>
                        </div>
                      </Grid>
                      <Grid item xs={1} style={{ textAlign:'center', margin:"auto"}}>
                          <button onClick={this.nextButtonFunc} >
                                Next
                            </button>
                      </Grid>
                  </Grid>
                
              )}
            </ReactCircleModal>
        )
    }
}
