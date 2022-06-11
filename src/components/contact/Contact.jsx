import React, { useRef, useState } from 'react';
// import React from 'react'
import "./styling/contact.css"

import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done, setDone] =useState(false)
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [msg, setMsg] =useState('')
    const nameHandler=(event)=>{
        console.log("typing name")
        setName(event.target.value) 
    }
    const emailHandler=(event)=>{
        console.log("typing email")
        setEmail(event.target.value)
    }
    const msgHandler=(event)=>{
        console.log(event.target.value)
        setMsg(event.target.value)
    }
    const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm('service_pr5bfjq', 'template_c8qbe5c', form.current, '42vEztEWm-oI2Za2W')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            e.preventDefault(); // 👈️ prevent page refresh
            setName('');
            setEmail('');
            setMsg('');

        }, (error) => {
            console.log(error.text);
        });
    };
  return (
      <div className="contact-form">
          <div className="w-left">
              <div className="awesome">
                  <span>Get in Touch</span>
                  <span>Contact me</span>
                  <div className="blur s-blur1" style={{background:"#abf1ff94"}}></div>
              </div>
          </div>

          {/* right side */}
          <div className="c-right">
          
              <form ref={form} onSubmit={sendEmail}>
                  <input onChange={nameHandler} value={name} type="text" name='name' className='user' placeholder='Username' />
                  <input onChange={emailHandler} value={email} type="email" name='email' className='user' placeholder='Email' />
                  <textarea onChange={msgHandler} value={msg} type="message" name='msg' className='user' placeholder='message' />
                  <input type="submit" value='Send' className='button'/>
                  <span>{done && "Thanks for contacting me"}</span>
              </form>
            <div className="blur c-blur1" style={{background:"var(--purple)"}}></div> 
          </div>
      </div>
    )
}

export default Contact
