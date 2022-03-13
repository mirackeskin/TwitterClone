import React, { Component } from 'react'
import '../styles/Tweetcardbutton.css'

export default class Tweetcardbutton extends Component {
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
      const {buttontype,buttoncolor}=this.props;
      const buttonclasshover=buttontype+" "+buttoncolor;
      const buttonclass=buttontype+" "+"defaultcolor";
      console.log(buttonclass);
    return (
      this.state.hover 
        ?
        <div  className='tweetcard-button'>
            <span onMouseLeave={this.MouseLeave} onMouseEnter={this.MouseEnter} className={buttonclasshover}></span>
        </div>
        :
        <div  className='tweetcard-button'>
          <span onMouseLeave={this.MouseLeave} onMouseEnter={this.MouseEnter} className={buttonclass}></span>
        </div>
    )
  }
}
