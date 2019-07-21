import React, { Component } from 'react';
import './App.css';
import pictures from './pictures.json';
import Cards from './Components/Card';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper'; 

class App extends Component {
  //This is our initial state of the pictures
  state = {
    pictures,
    score: 0,
    high: 0
  }
  clicky = (id) => {
    // This is to find the card that is being clicked
    this.state.pictures.find((obj, pic) => {
      if (obj.id === id) {
        //If the card clicked is set to false, set it to true and add a point to the score
        if (pictures[pic].beenClicked === false) {
          pictures[pic].beenClicked = true
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
      // return true
    })
  }
  // This is our game over function
    endGame = () => {
      // If the score at the end of the game is higher than the highscore, it will put the current score into the highscore
      if (this.state.score > this.state.high) {
        this.setState({high: this.state.score}, function() {
          console.log(this.state.high)
        })
      }
      // Making sure to set all of our cards back to false
      this.state.pictures.forEach(card => {
        card.beenClicked = false
      })
      alert(`I'm sorry, you have already picked that! Game Over! Score: ${this.state.score}`)
      this.setState({score: 0})
      // return true
        
    }
    

 render = () => {
   return (
     <Wrapper>
       <Header score={this.state.score} high={this.state.high}>Mario and Friends Clicky Game</Header>
       {this.state.pictures.map(pic => (
         <Cards
          key={pic.id}
          clicky={this.clicky}
          id={pic.id}
          photo={pic.photo}
          
          />
       ))}
     </Wrapper>
   )
 }
}

export default App;
