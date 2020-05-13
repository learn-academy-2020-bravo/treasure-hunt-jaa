import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  render(){
    let square = this.state.squares.map((value, index) => {
      return (
        <Square value={value} />
      )
    })
    return(
      <React.Fragment>
        <div>
        <h1>Treasure Hunt App</h1>
        <div id="square1">
        { square.slice(0,3) }
        <div id="square2">
        { square.slice(3,6) }
        </div>
        <div id="square3">
        { square.slice(6,9) }
        </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}
export default App
