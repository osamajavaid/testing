import React from 'react'
import wave from '../../img/wave.png'
import './styling/footer.css'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import WhatsApp from '@iconscout/react-unicons/icons/uil-whatsapp'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'

const Footer = () => {
  return (
      <div className="footer">
          <img src={wave} style={{width:'100%'}} alt="" />
          <div className="f-content">
              <div className="f-icons">
                  <Facebook color='white' size='3rem'/>
                  <Twitter color='white' size='3rem'/>
                  <GitHub color='white' size='3rem'/>
                  <WhatsApp color='white' size='3rem'/>
              </div>
              <span>codeworthy99@gmail.com</span>
          </div>
      </div>
  )
}

export default Footer
