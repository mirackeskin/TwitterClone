import React, { Component } from 'react'
import "../styles/Container.css"

export default class Container extends Component {
  render() {
    return (
      <div  className='Container container'>{this.props.children}</div>
    )
  }
}


