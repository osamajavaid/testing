import React from 'react'
import './styling/navbar.css'


const Navbar = () => {
  return (
      <div className="n-wrapper">
          <div className="n-left">
              <div className="n-name">MOJ</div>
              <span>theme</span>
          </div>
          <div className="n-right">
              <div className="n-list">
                  <ul>
                      <li>Home</li>
                      <li>Services</li>
                      <li>Experience</li>
                      <li>Portfolio</li>
                      <li>Testimonials</li>
                  </ul>
              </div>
              <button className="button n-button">Contact</button>
          </div>
      </div>
  )
}

export default Navbar
