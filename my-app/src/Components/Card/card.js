import React from 'react'
import './style.css'
// This function is to call the card to be able to be clicked on
function Cards (props) {
  return (
  // This is where the props get clicked on it will do something
    <div className='card-img' onClick={() => props.clicky(props.id)}>
      <img src={props.photo} alt={props.name} className='images' />
    </div>
  )
}

export default Cards
