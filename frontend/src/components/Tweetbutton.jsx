import React, { Component } from 'react'
import "../styles/Tweetbutton.css"

export default class Tweetbutton extends Component {
  render() {
    return (
      <div className='tweet-button-wrapper'>
          <div className='tweet-button'>
            <span className='span'>Tweetle</span>
          </div>
      </div>
    )
  }
}
