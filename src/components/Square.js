import React, { Component } from 'react'

class Square extends Component{
  constructor(props){
    super(props)
  }
  handleClick = () => {   
    this.props.parentClick(this.props.index)
  }
  render(){
    return(
      <React.Fragment>
      <div className="square" id={this.props.index.toString()} onClick={this.handleClick}>
      {this.props.value}
      </div>

      </React.Fragment>
    )
  }
}
export default Square
