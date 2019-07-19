import React, { Component } from 'react';
import './App.css';
import pictures from './pictures.json';
import Card from './Components/Card';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper'; 

class App extends Component {
  //This is our initial state of the pictures
  state = {
    pics,
    score: 0,
    high: 0
  }

 render() {
   return (
     <Wrapper>
       <Header score={this.state.score} high={this.state.high}>Mario and Friends Clicky Game</Header>
       {this.state.cards.map(card => (
         <Card
          onclick={this.onclick}
          id={this.id}
          photo={this.photo}
          />
       ))}
     </Wrapper>
   )
 }
}

export default App;
