import React, { Component } from 'react'
import "../styles/Content.css"
import Contentnavbar from "../components/Contentnavbar"
import  Sidebar from "../components/Sidebar"
import Tweetsendcard from './Tweetsendcard'
import Tweetcard from './Tweetcard'

export default class Content extends Component {
  render() {
    return (
      <div  className='Content'>
        <Contentnavbar></Contentnavbar>
        <Tweetsendcard></Tweetsendcard>
        <Tweetcard></Tweetcard>
        
      </div>
    )
  }
}

