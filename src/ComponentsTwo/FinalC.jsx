

import React, { useState } from 'react'
import { motion } from "framer-motion";
import logo from "../Assets/logo.jpg";
import rightImage from '../Assets/rightimage.webp';
import centerImage from "../Assets/centerimage.webp";
import leftImage from "../Assets/leftimage.webp";
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function FinalC() {
    const onClick2=()=>{
                 window.location.href="#fast"
         }

  return (
    <>
    <div className='navhead'>
    <img src={logo} alt='Logo' className='logo' />
    <span>chrome</span>
    <a>AI innovations</a>
    <a>Features</a>
    <a>Safety</a>
    <a>By Google</a>
    <a>Extensions</a>
    </div>
    <div>
        <motion.div 
        initial={{ y: 100, opacity: 0 }} // Initial animation state
    animate={{ y: 0, opacity: 1 }} // Animation when component is mounted
    transition={{ duration: 1 }}>

        <img src={logo} alt='Image' className='centerImage'/>
        <h3 className='heading1'>The Browser built to be yours </h3>
        <div className='searchbar'>
           <ul>
            <li style={{ textDecoration: 'none', color: '#6c6e70' }}>Update</li>
            <li style={{ textDecoration: 'none', color: '#6c6e70'}}>AI</li>
            <li style={{ textDecoration: 'none', color: '#6c6e70' }}>Yours</li>
            <li style={{ textDecoration: 'none', color: '#6c6e70'}}>Safe</li>
            <li onClick={ onClick2}style={{ textDecoration: 'none', color: '#6c6e70' }}>Fast</li>
            <li style={{ textDecoration: 'none', color: '#6c6e70'}}>By Google</li>
            
            
            </ul>
            
            <p className='paraone'>Need the Chrome Installer? <span className='clicklink'>Download Here</span> </p>
        </div>
        </motion.div>
        <div className='imagesSection'>
        <motion.div
    initial={{ x: -100, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }} 
    transition={{ duration: 1 }} 
  >
        <img src={leftImage} alt='Google Images' className='overFlow' />
        </motion.div>
        <motion.div
    initial={{ y: 100, opacity: 0 }} // Initial animation state
    animate={{ y: 0, opacity: 1 }} // Animation when component is mounted
    transition={{ duration: 1 }}
  >
    <img src={centerImage} alt='Google Images' className='overFlowcenter' />
  </motion.div>
  <motion.div
     initial={{ x: 100, opacity: 0 }} // Initial animation state
     animate={{ x: 0, opacity: 1 }} // Animation when component is mounted
     transition={{ duration: 1 }}
  >
    <img src={rightImage} alt='Google Images' className='overFlow' />
  </motion.div>
  </div>
  </div>
  <br></br><br></br><br></br><br></br>
  <div id='fast'>
    <a href='#fast' aria-hidden='true' />
    <h1>
        The{" "}
        <motion.span
          className='fastcmp'
          style={{ width: "140px", display: "inline-block" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="spinner"></span>Fast
        </motion.span>{" "}
        ways to do Things Online
      </h1>
   <div>
   <video width="960" height="515" autoPlay muted>
  <source src="https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm" type="video/webm" />
</video>
</div>

  </div>
    </>
  )
}

export default FinalC;
// import React from 'react';
// import './styles.css'

// function FinalC() {

//     const onClick=()=>{
//         window.location.href="#fast"
//     }
//   return (
//     <>
    
// <ul>
//     <li>Abc</li>
//     <li>def</li>
//     <li>ghi</li>
//     <li>jkl</li>
//     <li>mno</li>
//     </ul>
//     </>
//   )
// }

// export default FinalC