import React from 'react'
import './style.css'
// This function is to call the card to be able to be clicked on
function Cards (props) {
  return (
  // This is where the props get clicked on it will do something
    <div className='card-img' onClick={() => props.clicky(props.id)}>
      <div className='img-container'>
        <img src={props.photo} alt={props.name} className='images' />
      </div>
    </div>
  )
}

export default Cards
