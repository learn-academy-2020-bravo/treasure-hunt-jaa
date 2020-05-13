import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends Component{
  constructor(props){
    super(props)

    var stuff = ["treasure", "bomb", "tree", "tree", "tree", "tree", "tree", "tree", "tree"];
    shuffle(stuff);
    console.log(stuff);

    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      currentPosition: "",
      hiddenStuff: stuff
    }
  }

  handleChange = (ind) => {
    // var hiddenStuff = this.state.hiddenStuff
    var squares = this.state.squares
    squares[ind] = this.state.hiddenStuff[ind]
    this.setState({squares: squares})
  }




  render(){
    let square = this.state.squares.map((value, index) => {
      return (
        <Square value={value} index={index} key={index} click={this.handleChange}/>
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>

        <div id="game-board">
          {square}

        </div>
      </React.Fragment>
    )
  }
}
export default App
