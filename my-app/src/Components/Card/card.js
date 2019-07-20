import React from 'react'
import './style.css'
// This function is to call the card to be able to be clicked on
const Card = props => {
  // This is where the props get clicked on it will do something
  <div className='card' onClick={() => props.clickTime(props.id)}>
    <div className='img-container'>
      <img src={props.photo} alt={props.name} />
    </div>
  </div>
}

export default Card
