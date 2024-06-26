import React, { useRef } from 'react';
import logo from "../Assets/logo.jpg";
import './style.css';

import leftImage from "../Assets/leftimage.webp"
import centerImage from "../Assets/centerimage.webp"
import rightImage from "../Assets/rightimage.webp";
import { motion } from "framer-motion";



import { Link } from 'react-scroll';
import Fast from './Fast';


function HomePage() {
    const ref = useRef(null);
    // const scrollHandler = (eleRef) =>{
    //     window.scrollTo({top:eleRef.current.offsetToTop, behavior:'smooth'})
    // }
    const handleClick=()=>{
        ref.current?.scrollIntoView({behaviour:'smooth'})
        
    }
    
  return (
    <>
    <div className='navhead'>
    <img src={logo} alt='Logo' className='logo' />
    <span>chrome</span>
    {/* <Link to="/">Ai Innovations</Link>
    <Link to="/">Features</Link>
    <Link to="/">Safety</Link>
    <Link to="/">By Google</Link>
    <Link to="/">Extensions</Link> */}
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
            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Update</Link></li>
            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>AI</Link></li>
            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Yours</Link></li>
            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Safe</Link></li>
            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }} onClick={handleClick}>Fast</Link></li>
            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>By Google</Link></li>
            
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
        <Fast ref={ref} />
        {/* <div ref={fast}>
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
</div> */}

    </>
  )
}

export default HomePage
