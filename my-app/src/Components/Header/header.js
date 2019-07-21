import React from 'react'
import './header.css'

const Header = props => (
  <div className='header'>
    <div className='nameGame'>{props.children}</div>
    <div className='score'>
      Score: {props.score}
      &nbsp;
      Highscore: {props.high}
    </div>
    <br />
    <div className='howTo'>Hello, welcome to the Mario Clicky Game! The whole objective of the game is to click on different images every time.
    There is one catch however, every time you click an image it shuffles the images around.  If you click on an image that has already been
    picked, your game is over.  Try to get a highscore, and LET'S-A-GO!!!</div>
  </div>
)

export default Header
