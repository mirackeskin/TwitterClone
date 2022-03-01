import React, { Component } from 'react'
import "../styles/Content.css"
import Contentnavbar from "../components/Contentnavbar"
import  Sidebar from "../components/Sidebar"

export default class Content extends Component {
  render() {
    return (
      <div  className='Content'>
        <Contentnavbar></Contentnavbar>
      </div>
    )
  }
}

