import React from 'react'
import './styling/FloatingDec.css'

const FloatingDev = (props) => {
  return (
    <div className='floatingDev'>
      <img src={props.image} alt="" />
      <span>
          {props.txt1} <br /> {props.txt2}
      </span>
    </div>
  )
}

export default FloatingDev
