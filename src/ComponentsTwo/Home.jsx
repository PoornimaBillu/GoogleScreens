import React, { useState } from 'react'
import { motion } from "framer-motion";
import logo from "../Assets/logo.jpg";
import rightImage from '../Assets/rightimage.webp';
import centerImage from "../Assets/centerimage.webp";
import leftImage from "../Assets/leftimage.webp";
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Home() {
    const[menu, setmenu] = useState(null);

  return (
    <>
    <div>
        <motion.div 
        initial={{ y: 100, opacity: 0 }} // Initial animation state
    animate={{ y: 0, opacity: 1 }} // Animation when component is mounted
    transition={{ duration: 1 }}>

        <img src={logo} alt='Image' className='centerImage'/>
        <h3 className='heading1'>The Browser built to be yours </h3>
        <div className='searchbar'>
           <ul>
            <li style={{ textDecoration: 'none', color: '#6c6e70' }}><AnchorLink><p onClick={()=>setmenu("home")}></p></AnchorLink>Update</li>
            <li style={{ textDecoration: 'none', color: '#6c6e70'}}> <AnchorLink><p onClick={()=>setmenu("ai")}></p></AnchorLink>AI</li>
            <li style={{ textDecoration: 'none', color: '#6c6e70' }}><AnchorLink><p onClick={()=>setmenu("yours")}></p></AnchorLink>Yours</li>
            <li style={{ textDecoration: 'none', color: '#6c6e70'}}><AnchorLink><p onClick={()=>setmenu("safe")}></p></AnchorLink>Safe</li>
            <li style={{ textDecoration: 'none', color: '#6c6e70' }}><AnchorLink><p onClick={()=>setmenu("fast")}></p></AnchorLink>Fast</li>
            <li style={{ textDecoration: 'none', color: '#6c6e70'}}><AnchorLink><p onClick={()=>setmenu("bygoogle")}></p></AnchorLink>By Google</li>
            
            
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
    </>
  )
}

export default Home;