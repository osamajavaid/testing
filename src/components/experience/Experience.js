import React from 'react'
import './styling/experience.css'

const Experience = () => {
  return (
    <div className='experience'>
      <div className="achievement">
          <div className="circle">3+</div>
          <span>Year</span>
          <span>Experience</span>
      </div>
      <div className="achievement">
          <div className="circle">8+</div>
          <span>Project</span>
          <span>Completed</span>
      </div>
      <div className="achievement">
          <div className="circle">4+</div>
          <span>Companies</span>
          <span>Worked</span>
      </div>
    </div>
  )
}

export default Experience
