import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'
const emoji = require("emoji-dictionary")
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

    var stuff = [(emoji.getUnicode("unicorn")), (emoji.getUnicode("poop")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse"))];
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
// const emoji = require("emoji-dictionary")
// console.log);

    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      hiddenStuff: stuff,
      count: 6
    }
  }



  handleChange = (index) => {
    var squares = [...this.state.squares]
    squares[index] = this.state.hiddenStuff[index]
    this.setState({squares: squares, count: this.state.count-1},
    () => {

      if (squares[index] === (emoji.getUnicode("unicorn"))) {
        setTimeout(() => {
          alert("you win")
           this.handleClear()
        }, 300)

         }
           else if (squares[index] === (emoji.getUnicode("poop"))) {
             setTimeout(() => {
               alert("you lose")
                this.handleClear()
             }, 300)

          }
           else if (this.state.count === 0) {
             setTimeout(() => {
               alert("you suck")
                this.handleClear()
             }, 300)

        }
    } )
  }

  handleClear = () => {
    var stuff = [(emoji.getUnicode("unicorn")), (emoji.getUnicode("poop")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse")), (emoji.getUnicode("horse"))];
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
        <h1>Unicorn Hunt App</h1>

        <div id="game-board">
          {square}
        <button id="button" onClick={this.handleClear}>Play Again</button>
    <p id="count">You have this many counts left: { this.state.count }</p>
        </div>
      </React.Fragment>
    )
  }
}
export default App
