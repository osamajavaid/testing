import React from 'react'
import './styling/intro.css'
import FloatingDev from '../Floating/FloatingDev'
import Github from '../../img/github.png'
import Linkdin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import boy1 from '../../img/alter.jpg'
import crown from '../../img/crown.png'
import thumbup from '../../img/thumbup.png'
import glassesEmogi from '../../img/glassesimoji.png'
import {motion} from 'framer-motion'


const Intro = () => {
    const transition = {duration:2, type: 'spring'}
  return (
      <div className="intro">
          <div className="i-left">
              <div className="i-name">
                  <span>Hey! I Am</span>
                  <span>Muhd. Osama Javaid</span>
                  <span>Frontend Developer with high level of
                    experience in web designing and development,
                    producting a Quality work
                  </span>
              </div>
              <button className='button i-button'>Hire Me</button>
              <div className="i-icons">
                  <a href="https://github.com/osamajavaid"><img src={Github} alt="" /></a>
                  <a href="https://www.linkedin.com/in/reachosama/"><img src={Linkdin} alt="" /></a>
                  <a href="https://twitter.com/0samaJavaid  "><img src={Instagram} alt="" /></a>
              </div>
          </div>
          <div className="i-right">
              <img style={{transform: 'scale(1)'}} src={boy1} alt="" />
              <img style={{transform: 'scale(0.68)'}} src={glassesEmogi} alt="" />
              <div>
                  <FloatingDev image={crown} txt1='Web' txt2='Developer'/>
              </div>
              <div>
                  <FloatingDev image={thumbup} txt1='UI/UX' txt2='Designes'/>
              </div>
              {/* blur divs
              <div className="blur" style={{background: 'rgba(238,210,235)'}}></div>              
              <div className="blur" style={{background: 'c1f5ff'}}></div>               */}
          </div>
      </div>
  )
}

export default Intro
