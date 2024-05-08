import React from 'react'
import logo from '../Assets/logo.jpg'
import "./styles.css"
import Home from './Home';
import FastP from './FastP';

function Navbar() {
  return (
    <>
    <div className='navhead'>
    <img src={logo} alt='Logo' className='logo' />
    <span>chrome</span>

    <ul>
        <li>AI Innovations</li>
        <li>Features</li>
        <li>Safety</li>
        <li>By Google</li>
        <li>Extensions</li>
    
    </ul>
    </div>
    

    </>
  )
}

export default Navbar;