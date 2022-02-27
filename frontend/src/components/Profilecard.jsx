import React, { Component } from 'react'
import "../styles/Profilecard.css"
import photo from "../images/profileimage.jpg"
import Tweetbutton from './Tweetbutton';

export default class Profilecard extends Component {
    constructor(props){
        super(props);
        this.state={
            hover:false,
        }
    }

    MouseEnter=()=>{
        this.setState({hover:true})
    }

    MouseLeave=()=>{
        this.setState({hover:false})
    }
    
  render() {
    return (
      this.state.hover ? 
        <div onMouseLeave={this.MouseLeave} onMouseEnter={this.MouseEnter} className='profile-card-wrapper-hover'>
            <div className='profile-card-left-box'>
                <div className='profile-card-photo'>
                    <img src={photo} alt="" />
                </div>
                <div className='profile-card-text'>
                    <p className='p1'>Miraç Keskin</p> 
                    <p className='p2'>@mirackeskin</p>
                </div>
            </div>
            <div className='profile-card-right-box'>
                <div className='profile-card-button'>
                    <span className='fa fa-bars'></span>
                </div>
            </div>
        </div>
        :
        <div onMouseLeave={this.MouseLeave} onMouseEnter={this.MouseEnter} className='profile-card-wrapper'>
          <div className='profile-card-left-box'>
              <div className='profile-card-photo'>
                  <img src={photo} alt="" />
              </div>
              <div className='profile-card-text'>
                  <p className='p1'>Miraç Keskin</p> 
                  <p className='p2'>@mirackeskin</p>
              </div>
          </div>
          <div className='profile-card-right-box'>
              <div className='profile-card-button'>
                  <span className='fa fa-bars'></span>
              </div>
          </div>
      </div>
    )
  }
}
