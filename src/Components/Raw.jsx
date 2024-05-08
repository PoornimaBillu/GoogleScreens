// import React, { useState } from "react";


// import { Link } from "react-scroll";


// function Raw(){
//     const [showmenu,setShowmenu]=useState(false);

//     return(
//         <div>
           
//             <nav className="navbar">
                
//                 <div className="desktopMenu">
// <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
// <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">About</Link>
// <Link activeClass="active" to="works" spy={true} smooth={true} offset={-40} duration={600} className="desktopMenuListItem">Portfolio</Link>
// <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Clients</Link>
//                 </div>
//                 <button className="desktopMenuBtn" onClick={()=>{
//                     document.getElementById("contact").scrollIntoView({behavior:"smooth"});
//                 }}>
//         <img src="" alt="" className="desktopMenuImg" />Contact Me
//                 </button>
//                 <img className="mobMenu" src='' alt="Menu" onClick={()=>setShowmenu(!showmenu)

//                 }/>
//                 <div className="navMenu" style={{display:showmenu? 'flex':"none"}}>
// <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={1000} className="ListItem" onClick={()=>{setShowmenu(false)}}>Home</Link>
// <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-40} duration={1000} className="ListItem" onClick={()=>{setShowmenu(!showmenu)}}>About</Link>
// <Link activeClass="active" to="works" spy={true} smooth={true} offset={-40} duration={1000} className="ListItem" onClick={()=>{setShowmenu(!showmenu)}}>Portfolio</Link>
// <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-40} duration={1000} className="ListItem" onClick={()=>{setShowmenu(!showmenu)}}>Clients</Link>
// <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-40} duration={1000} className="ListItem" onClick={()=>{setShowmenu(!showmenu)}}>Contacts</Link>
     
//                 </div>

//             </nav>
//         </div>
//     )
// }
// export default Raw;
import React, { useRef, useState } from 'react';
import logo from "../Assets/logo.jpg";
import './style.css';
import leftImage from "../Assets/leftimage.webp"
import centerImage from "../Assets/centerimage.webp"
import rightImage from "../Assets/rightimage.webp";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import Fast from './Fast'; // Import the Fast component

function Raw() {
    const fastRef = useRef(null); // Change ref name to avoid conflict
    const [showFast, setShowFast] = useState(false); // State to control rendering of Fast component

    const scrollHandler = () => {
        if (fastRef.current) {
            window.scrollTo({ top: fastRef.current.offsetTop, behavior: 'smooth' })
        }
    }

    const handleFastClick = () => {
        setShowFast(true); // Set showFast to true when "Fast" link is clicked
        scrollHandler(); // Scroll to Fast component
    }

    return (
        <>
            <div className='navhead'>
                <img src={logo} alt='Logo' className='logo' />
                <span>chrome</span>
                <a href="#" style={{ textDecoration: 'none', color: '#6c6e70' }} onClick={handleFastClick}>Fast</a>
            </div>
            <div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <img src={logo} alt='Image' className='centerImage' />
                    <h3 className='heading1'>The Browser built to be yours </h3>
                    <div className='searchbar'>
                        <ul>
                            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Update</Link></li>
                            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>AI</Link></li>
                            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Yours</Link></li>
                            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Safe</Link></li>
                            <li><Link to='fast' smooth={true} duration={500} style={{ textDecoration: 'none', color: '#6c6e70' }}>Fast</Link></li>
                            <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>By Google</Link></li>
                        </ul>
                        <p className='paraone'>Need the Chrome Installer? <span className='clicklink'>Download Here</span> </p>
                    </div>
                </motion.div>
                <div className='imagesSection'>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <img src={leftImage} alt='Google Images' className='overFlow' />
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <img src={centerImage} alt='Google Images' className='overFlowcenter' />
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <img src={rightImage} alt='Google Images' className='overFlow' />
                    </motion.div>
                </div>
            </div>
            {showFast && <Fast ref={fastRef} />} {/* Render the Fast component conditionally */}
        </>
    )
}

export default Raw;
