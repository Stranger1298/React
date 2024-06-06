import React from 'react'
import './header.css'
import group from '../../assets/Group 81.png'
import illustration from '../../assets/Illustration.png'
const Header = () => {
  return (
    <div className='header'>
      <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
      <p className='header-text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <div className="input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="signup">
          <img src={group} alt="group" />
          <p>1,600 people requested access a visit in last 24 hours </p>
      </div>
      <img className='illu' src={illustration} alt="illu" />
    </div>
  )
}

export default Header