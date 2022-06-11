import React from 'react'
import './styling/cards.css'

const Cards = (props) => {
  return (
      <div className="cards">
          <img src={props.emoji} alt="" />
          <span>{props.heading}</span>
          <span>{props.detail}</span>
      </div>
    )
}

export default Cards
