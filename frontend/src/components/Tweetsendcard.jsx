import React, { Component } from 'react'
import '../styles/Tweetsendcard.css'
import photo from '../images/profileimage.jpg'
import Tweetbutton from './Tweetbutton';
import Singlefontbutton from './Singlefontbutton';

export default class Tweetsendcard extends Component {
    submit=()=>{
        alert("sasa");
    }
  render() {
    return (
      <div className='tweet-sendcard-wrapper'>
          <div className='first-wrapper'>
              <div className='sendcard-photo'>
                  <img className='sendcard-photo-image' src={photo} alt="" />
              </div>
              <div className='sendcard-input'>
                  <textarea placeholder='Neler Oluyor?' className='sendcard-textarea' cols="30" rows="3"></textarea>
              </div>
          </div>
          <div className='second-wrapper'>
              <div className='space'></div>
              <div className='buttons-wrapper'>
                  <div className='tweet-content-buttons-wrapper'>
                      <div className='tweet-content-buttons'>
                        <Singlefontbutton buttontype="fa fa-image"></Singlefontbutton>
                        <Singlefontbutton buttontype="fa fa-chart-bar"></Singlefontbutton>
                        <Singlefontbutton buttontype="fa fa-smile"></Singlefontbutton>
                        <Singlefontbutton buttontype="fa fa-gift"></Singlefontbutton>
                        <Singlefontbutton buttontype="fa fa-calendar"></Singlefontbutton>
                        <Singlefontbutton buttontype="fa fa-location-arrow"></Singlefontbutton>
                      </div>
                  </div>
                  <div className='send-tweet'>
                        <Tweetbutton></Tweetbutton>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
