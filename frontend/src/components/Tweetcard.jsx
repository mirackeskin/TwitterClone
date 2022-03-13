import React, { Component } from 'react'
import photo from '../images/profileimage.jpg'
import '../styles/Tweetcard.css'
import Tweetcardbutton from '../components/Tweetcardbutton'

export default class Tweetcard extends Component {
    constructor(props){
        super(props);
        this.state={
            hover:false
        }
    }
    MouseEnter=()=>{
        this.setState({hover:true});
    }
    MouseLeave=()=>{
        this.setState({hover:false});
    }
  render() {
    return (
      this.state.hover
      ?
      <div onMouseLeave={this.MouseLeave} onMouseEnter={this.MouseEnter} className='tweetcard-wrapper-hover'>
          <div className='tweetcard-first-wrapper'>
              <div className='tweetcard-image-wrapper'>
                  <img className='tweetcard-image' src={photo} alt="" />
              </div>
          </div>
          <div className='tweetcard-second-wrapper'>
            <div className='tweet-content-wrapper'>
                <div className='tweet-owner-wrapper'>
                    <p className='tweet-owner-name'>Miraç Keskin</p>
                    <p className='tweet-owner-nickname'>@mirackeskin</p>
                    <p className='tweet-hour'>2sa</p>
                </div>
                <div className='tweet-content'>
                    <p className='tweet-content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis adipisci eos maiores eius quas excepturi reiciendis repudiandae, 
                    ducimus itaque nisi est neque sit minus aliquam praesentium velit! Natus, praesentium.</p>
                </div>
            </div>
            <div className='tweetcard-buttons-wrapper'>
                <div className='tweetcard-button-wrapper'>
                    <Tweetcardbutton buttontype="fa fa-comment" buttoncolor="blue"></Tweetcardbutton>
                </div>
                <div className='tweetcard-button-wrapper'>
                    <Tweetcardbutton buttontype="fa fa-retweet" buttoncolor="green"></Tweetcardbutton>
                </div>
                <div className='tweetcard-button-wrapper'>
                    <Tweetcardbutton buttontype="fa fa-heart" buttoncolor="pink"></Tweetcardbutton>
                </div>
                <div className='tweetcard-button-wrapper'>
                    <Tweetcardbutton buttontype="fa fa-share" buttoncolor="blue"></Tweetcardbutton>
                </div>
            </div>
          </div>
      </div>
      :
      <div onMouseLeave={this.MouseLeave} onMouseEnter={this.MouseEnter} className='tweetcard-wrapper'>
          <div className='tweetcard-first-wrapper'>
              <div className='tweetcard-image-wrapper'>
                  <img className='tweetcard-image' src={photo} alt="" />
              </div>
          </div>
          <div className='tweetcard-second-wrapper'>
            <div className='tweet-content-wrapper'>
                <div className='tweet-owner-wrapper'>
                    <p className='tweet-owner-name'>Miraç Keskin</p>
                    <p className='tweet-owner-nickname'>@mirackeskin</p>
                    <p className='tweet-hour'>2sa</p>
                </div>
                <div className='tweet-content'>
                    <p className='tweet-content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis adipisci eos maiores eius quas excepturi reiciendis repudiandae, 
                    ducimus itaque nisi est neque sit minus aliquam praesentium velit! Natus, praesentium.</p>
                </div>
            </div>
            <div className='tweetcard-buttons-wrapper'>
                <div className='tweetcard-button-wrapper'>
                    <Tweetcardbutton buttontype="fa fa-comment" buttoncolor="blue"></Tweetcardbutton>
                </div>
                <div className='tweetcard-button-wrapper'>
                    <Tweetcardbutton buttontype="fa fa-retweet" buttoncolor="green"></Tweetcardbutton>
                </div>
                <div className='tweetcard-button-wrapper'>
                    <Tweetcardbutton buttontype="fa fa-heart" buttoncolor="pink"></Tweetcardbutton>
                </div>
                <div className='tweetcard-button-wrapper'>
                    <Tweetcardbutton buttontype="fa fa-share" buttoncolor="blue"></Tweetcardbutton>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
