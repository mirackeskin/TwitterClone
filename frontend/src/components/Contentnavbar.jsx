import React, { Component } from 'react'
import "../styles/Contentnavbar.css"
import Singlefontbutton from './Singlefontbutton'

export default class Contentnavbar extends Component {
  render() {
    return (
      <div className='Contentnavbar'>
          <div className='Contentnavbar-leftbox'>
            <div className='Contentnavbar-headerwrapper'>
                <p className='Contentnavbar-header'>AnaSayfa</p>
            </div>
          </div>
          <div className='Contentnavbar-rightbox'>
            <Singlefontbutton buttontype="fa fa-star"></Singlefontbutton>
          </div>
      </div>
    )
  }
}
