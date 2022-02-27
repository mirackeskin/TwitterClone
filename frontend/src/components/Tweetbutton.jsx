import React, { Component } from 'react'
import "../styles/Tweetbutton.css"

export default class Tweetbutton extends Component {
  constructor(props){
    super(props);
    this.state={
      hover:false
    }
  }

  onMouse=()=>{
    this.setState({hover:true});
  }
  leaveMouse=()=>{
    this.setState({hover:false});
  }


  render() {
    return (
      <div  className='tweet-button-wrapper'>
          {
            this.state.hover ? 
              <div onMouseLeave={this.leaveMouse} onMouseEnter={this.onMouse}  className='tweet-button-hover'>
                <span className='tweet-button-span'>Tweetle</span>
              </div>
              
          : <div onMouseLeave={this.leaveMouse} onMouseEnter={this.onMouse}  className='tweet-button'>
              <span className='tweet-button-span'>Tweetle</span>
            </div>
          }
      </div>
    )
  }
}
