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

    shuffle(stuff);



    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
     // currentPosition: "",
      hiddenStuff: stuff,
      count: 6
    }
  }

  

  handleChange = (index) => {
    var squares = [...this.state.squares]
    squares[index] = this.state.hiddenStuff[index]
    this.setState({squares: squares, count: this.state.count-1} )
  
    if (squares[index] === "treasure") {
         alert("you win")
      
       }
         else if (squares[index] === "bomb") {
         alert("you lose")
        }
         else if (this.state.count === 0) {
           alert("you suck at this")}
           
      }
      

  handleClear = () => {
    var stuff = ["treasure", "bomb", "tree", "tree", "tree", "tree", "tree", "tree", "tree"];
    shuffle(stuff);
    this.setState({squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"], hiddenStuff: stuff})
    this.setState({count: 6})
  }

  render(){
    let square = this.state.squares.map((value, index) => {
      return (
        <Square value={value} index={index} key={index} parentClick={this.handleChange}/>
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>

        <div id="game-board">
          {square}
        <button onClick={this.handleClear}>Play Again</button>
    <p>You have this many counts left: { this.state.count }</p>
        </div>
      </React.Fragment>
    )
  }
}
export default App
