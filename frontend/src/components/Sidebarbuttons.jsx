import React, { Component } from 'react'
import Sidebarbutton from './Sidebarbutton'
import "../styles/Sidebarbuttons.css"

export default class Sidebarbuttons extends Component {
  constructor(props){
    super(props);
  }

  render() { 
    
    const {sidebarbuttons}=this.props;
    console.log(sidebarbuttons)
    return (
      <div className='Sidebarbuttons'>
          
          {
            sidebarbuttons.map(sidebarbutton=>(
              <Sidebarbutton key={sidebarbutton.key} title={sidebarbutton.title} icon={sidebarbutton.icon}></Sidebarbutton>
            ))
          }

          <div style={{clear:"both"}}></div>
      </div>
    )
  }
}
