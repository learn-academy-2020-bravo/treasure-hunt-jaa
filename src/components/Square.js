import React, { Component } from 'react'

class Square extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <React.Fragment>
      <div id="square" onClick={this.props.click(this.props.index)}>
      {this.props.value}
      </div>

      </React.Fragment>
    )
  }
}
export default Square
