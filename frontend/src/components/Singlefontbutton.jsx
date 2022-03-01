import React, { Component } from 'react'
import "../styles/Singlefontbutton.css"

export default class Singlefontbutton extends Component {
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
      const {buttontype}=this.props;
    return (
        this.state.hover 
            ?
            <div className='font-button-hover'>
                <span onMouseLeave={this.MouseLeave} onMouseEnter={this.MouseEnter} className={buttontype} id="spanbutton"></span>
            </div>
            : 
            <div className='font-button'>
                <span onMouseLeave={this.MouseLeave} onMouseEnter={this.MouseEnter} className={buttontype}></span>
            </div>            
    )
  }
}
