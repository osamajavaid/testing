import React from 'react'
import './styling/work.css'
import upwork from '../../img/Upwork.png'
import facebook from '../../img/Facebook.png'
import amazon from '../../img/amazon.png'
import fiverr from '../../img/fiverr.png'
import shopify from '../../img/Shopify.png'

const Work = () => {
  return (
    <div className="work">
      {/* left side       */}
      <div className="awesome">
        <span>Works for All these</span> 
        <span>Brand & Clients</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
        </span>
        {/* <div> */}
        <a href="#">
            <button className="button s-button">Hire Me</button>
        </a>
        {/* </div> */}
        <div className="blur s-blur1" style={{backgroundColor:'#abf1ff94'}}></div>
      </div>

      {/* right side */}
      <div className="w-right">
          <div className="w-mainCircle">
              <div className="w-secCircle">
                  <img src={upwork} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={fiverr} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={amazon} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={shopify} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={facebook} alt="" />
              </div>
          </div>
          {/* background circles */}
          <div className="w-backCircles blueCircle"></div>
          <div className="w-backCircles yellowCircle"></div>
      </div>
    </div>
  )
}

export default Work
