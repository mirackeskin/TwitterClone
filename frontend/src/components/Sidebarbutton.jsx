import React, { Component } from 'react'
import "../styles/Sidebarbutton.css"

export default class Sidebarbutton extends Component {
  constructor(props){
    super(props);
  }
  render() {    
    const {title,icon}=this.props;
    
    
    console.log(title)
    console.log(icon)
    
    return (
      <div className='Sidebarbutton'>
          <div className='Sidebarbutton-icon'>
              <i className={icon}></i>
          </div>
          <div className='Sidebarbutton-title'>
              <p>{title}</p>
          </div>
      </div>
    )
  }
}

