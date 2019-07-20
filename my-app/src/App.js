import React, { Component } from 'react';
import './App.css';
import pictures from './pictures.json';
import Card from './Components/Card';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper'; 

class App extends Component {
  //This is our initial state of the pictures
  state = {
    // pics,
    score: 0,
    high: 0
  }
  clicky = id => {
    // This is to find the card that is being clicked
    this.state.cards.find((j, i) => {
      if (j.id === id) {
        //If the card clicked is set to false, set it to true and add a point to the score
        if (pictures[i].beenClicked === false) {
          pictures[i].beenClicked = true
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score)
          })
          // This function sorts out the pictures position randomly
          this.state.pictures.sort(() => Math.random() - 0.5)
          return true
        } else {
          this.endGame()
        }
      }
    })
  }
  // This is our game over function
    

 render() {
   return (
     <Wrapper>
       <Header score={this.state.score} high={this.state.high}>Mario and Friends Clicky Game</Header>
       {this.state.pictures.map(card => (
         <Card
          clicky={this.onclick}
          id={this.id}
          photo={this.photo}
          />
       ))}
     </Wrapper>
   )
 }
}

export default App;
