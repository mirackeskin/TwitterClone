import React, { Component } from 'react'
import "../styles/Sidebar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Twitterlogo from './Twitterlogo'
import Sidebarbuttons from './Sidebarbuttons'
import Tweetbutton from './Tweetbutton'
import Profilecard from './Profilecard'

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state={
      sidebarbuttons:[
        {
          title:"Ana Sayfa",
          key:0,
          icon:"fa fa-home"
        },
        {
          title:"Keşfet",
          key:1,
          icon:"fa fa-thin fa-hashtag"
        },
        {
          title:"Bildirimler",
          key:2,
          icon:"fa fa-bell"
        },
        {
          title:"Mesajlar",
          key:3,
          icon:"fa fa-envelope"
        },
        {
          title:"Yer İşaretleri",
          key:4,
          icon:"fa  fa-bookmark"
        },
        {
          title:"Listeler",
          key:5,
          icon:"fa fa-book"
        },
        {
          title:"Profil",
          key:6,
          icon:"fa fa-user"
        },
        {
          title:"Daha Fazla",
          key:7,
          icon:"fa fa-plus"
        }
      ]
    }
    
  }
  render() {
    
    const titles=["Ana Sayfa","Keşfet","Bildirimler","Mesajlar","Yer İşaretleri","Listeler","Profil","Daha Fazla"];
    return (
      <div  className='Sidebar'>
        <div className='sidebar-up-panel'>
          <Twitterlogo></Twitterlogo>
          <Sidebarbuttons sidebarbuttons={this.state.sidebarbuttons}></Sidebarbuttons>
          <Tweetbutton></Tweetbutton>
        </div>
        <div className='sidebar-down-panel pb-2'>
          <Profilecard></Profilecard>
        </div>
          
      </div>
      
    )
  }
}


