import React from 'react'
import './navbar.css'
import logo from '../../assets/GPT-3.svg'

const Navbar = () => {
  return (
    <>
    <section className='navbar'>
      <div className='nav-items'>
       <img className='logo' src={logo} alt="logo"/>
        <p><a href="##">Home</a></p>
        <p><a href="#whatGPT3">What is gpt?</a></p>
        <p><a href="##">Open Ai</a></p>
        <p><a href="##">Case Studies</a></p>
        <p><a href="##">Library</a></p>
      </div>
      <div className='button'>
      
      </div>
      <button className='btn-design'>Sign up</button>
      <button className='btn' variant="contained"> Sign in</button>
      </section>
    </>
  )
}

export default Navbar