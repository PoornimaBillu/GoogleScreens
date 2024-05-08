// import React from 'react';
// import "./style.css";
// import {motion} from 'framer-motion'


// function Spin() {
//   return (
//     <>
//    <div>
//    <h1>
//         The{" "}
//         <motion.span
//           className='fastcmp'
//           style={{ width: "140px", display: "inline-block" }}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="spinner"></span>Fast
//         </motion.span>{" "}
//         ways to do Things Online
//       </h1>
//    </div>
//     {/* <div><h1>The <span className='fastcmp' style={{width: "140px", display: "inline-block"}}> <span className="spinner"></span>Fast</span> ways to do Things Online</h1></div> */}
  
//     </>
//   )
// }

// export default Spin
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const Fast = () => {
//   const [showSpinner, setShowSpinner] = useState(true);
//   const [lastTab, setLastTab] = useState(null);

//   useEffect(() => {
//     const urls = [
//       'https://www.gmail.com',
//       'https://www.facebook.com',
//       'https://www.twitter.com',
//       'https://www.linkedin.com',
//     ];

//     const openTabs = async () => {
//       // Open the first 5 tabs with a delay
//       for (let i = 0; i < 5; i++) {
//         await new Promise(resolve => setTimeout(() => {
//           const tab = window.open(urls[i], '_blank');
//           if (i === 4) setLastTab(tab); // Track the last tab opened
//           resolve();
//         }, i * 1000));
//       }

//       // Open the remaining tabs without delay
//       for (let i = 5; i < urls.length; i++) {
//         window.open(urls[i], '_blank');
//       }

//       // Hide spinner after all tabs have been opened
//       setTimeout(() => {
//         setShowSpinner(false);
//       }, (urls.length - 5) * 1000 + 1000);
//     };

//     openTabs();
//   }, []);

//   useEffect(() => {
//     // Show popup in the last tab after a delay
//     if (lastTab) {
//       setTimeout(() => {
//         lastTab.document.write(`
//           <h2>Popup Message</h2>
//           <p>This is a popup message in the last opened tab.</p>
//           <button onClick="window.close()">Close</button>
//         `);
//       }, 7000); // Adjust the delay as needed
//     }
//   }, [lastTab]);

//   return (
//     <div>
//       <h1>
//         The{" "}
//         <motion.span
//           className='fastcmp'
//           style={{ width: "140px", display: "inline-block" }}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="spinner"></span>Fast
//         </motion.span>{" "}
//         ways to do Things Online
//       </h1>
//       {showSpinner && <Spinner />}
      
//     </div>
//   );
// };

// const Spinner = () => {
//   return (
//     <div>
//       {/* Placeholder for spinner */}
//     </div>
//   );
// };

// export default Fast;

// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Fast = () => {
//   const [showSpinner, setShowSpinner] = useState(true);
//   const history = useHistory();

//   useEffect(() => {
//     const urls = [
//       'https://www.gmail.com',
//       'https://www.facebook.com',
//       'https://www.twitter.com',
//       'https://www.linkedin.com',
//     ];

//     const openTabs = async () => {
//       // Open the first 5 tabs with a delay
//       for (let i = 0; i < 5; i++) {
//         await new Promise(resolve => setTimeout(() => {
//           window.open(urls[i], '_blank');
//           resolve();
//         }, i * 1000));
//       }

//       // Open the remaining tabs without delay
//       for (let i = 5; i < urls.length; i++) {
//         window.open(urls[i], '_blank');
//       }

//       // Hide spinner after all tabs have been opened
//       setTimeout(() => {
//         setShowSpinner(false);
//         // Display a popup message
//         alert("This is the last tab. You are about to reach the bookmark tab.");
//       }, (urls.length - 5) * 1000 + 1000);
//     };

//     openTabs();
//   }, []);

//   // Prevent default behavior of links
//   const handleClick = (event) => {
//     event.preventDefault();
//     history.push('/fast');
//   };

//   return (
//     <div>
//       {showSpinner ? (
//         <div>Loading...</div>
//       ) : (
//         <div>
//           {/* Content for localhost:3000/fast */}
//         </div>
//       )}
//       <div>
//         <a href="/fast" onClick={handleClick}>Fast</a>
//       </div>
//     </div>
//   );
// };

// export default Fast;



// import React, { useEffect } from 'react';

// const Spin = () => {
//   useEffect(() => {
//     // List of URLs to open in new tabs
//     const urls = [
//       'https://www.facebook.com',
//       'https://www.gmail.com'
      
//       // Add more URLs as needed
//     ];

//     // Open each URL in a new tab
//     urls.forEach(url => {
//       const newTab = window.open(url, '_top');
//       // Blur the new tab to stay on the home page
//       if (newTab) {
//         newTab.blur();
//       }
//     });
//   }, []); // Run once on component mount

//   return (
//     <div>
//       <h1>Home Page</h1>
//       {/* Add your home page content here */}
//     </div>
//   );
// };

// export default Spin;
// import React from 'react';

// const Spin = () => {
//   const openTabs = () => {
//     // Open additional tabs while keeping the first tab active
//     window.open('https://example.com/tab2');
//     window.open('https://example.com/tab3');
//     window.open('https://example.com/tab4');
//     window.open('https://example.com/tab5');
//     window.open('https://example.com/tab6');
//   };

//   return (
//     <div>
//       <button onClick={openTabs}>Open Additional Tabs</button>
//     </div>
//   );
// }

// export default Spin;



// import React, { useEffect } from 'react';

// const Spin = () => {
//   useEffect(() => {
//     // URLs to open in new tabs
//     const urls = [
//       'https://example.com/tab1',
//       'https://example.com/tab2',
//       // Add more URLs for additional tabs
//     ];

//     // Open each URL in a new tab
//     urls.forEach(url => {
//       window.open(url, '_blank');
//     });
//   }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//   return (
//     <div>
//       {/* You can render any additional content here */}
//     </div>
//   );
// }

// export default Spin;


// import React from 'react';
// import logo from "../Assets/logo.jpg";
// import './style.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import leftImage from "../Assets/leftimage.webp"
// import centerImage from "../Assets/centerimage.webp"
// import rightImage from "../Assets/rightimage.webp";
// import { motion } from "framer-motion";
// import Fast from './Fast'; // Import the Fast component
// import { useState } from "react";

// function Spin() {
//   const [showFastContent, setShowFastContent] = useState(false);
//   const handleFastLinkClick = () => {
//     // Show the fast content when "Fast" link is clicked
//     setShowFastContent(true);
//   };
//   return (
//     <>
//       <div className='navhead'>
//         <img src={logo} alt='Logo' className='logo' />
//         <span>chrome</span>
//         {/* <Link to="/">Ai Innovations</Link>
//         <Link to="/">Features</Link>
//         <Link to="/">Safety</Link>
//         <Link to="/">By Google</Link>
//         <Link to="/">Extensions</Link> */}
//         <a>AI innovations</a>
//         <a>Features</a>
//         <a>Safety</a>
//         <a>By Google</a>
//         <a>Extensions</a>
//       </div>
//       <div>
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}>

//           <img src={logo} alt='Image' className='centerImage' />
//           <h3 className='heading1'>The Browser built to be yours </h3>
//           <div className='searchbar'>
//             <ul>
//               <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Update</Link></li>
//               <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>AI</Link></li>
//               <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Yours</Link></li>
//               <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Safe</Link></li>
//               <li><Link to='/fast' onClick={handleFastLinkClick} style={{ textDecoration: 'none', color: '#6c6e70' }}>Fast</Link></li>
//               <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>By Google</Link></li>

//             </ul>

//             <p className='paraone'>Need the Chrome Installer? <span className='clicklink'>Download Here</span> </p>
//           </div>
//         </motion.div>
//         <div className='imagesSection'>
//           <motion.div
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <img src={leftImage} alt='Google Images' className='overFlow' />
//           </motion.div>
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <img src={centerImage} alt='Google Images' className='overFlowcenter' />
//           </motion.div>
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <img src={rightImage} alt='Google Images' className='overFlow' />
//           </motion.div>
//         </div>
//       </div>
// <br></br><br></br><br></br><br></br>
//       {/* Include the Fast component */}
//       {showFastContent && (
//         <div>
//           <h1>
//             The{" "}
//             <motion.span
//               className='fastcmp'
//               style={{ width: "140px", display: "inline-block" }}
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="spinner"></span>Fast
//             </motion.span>{" "}
//             ways to do Things Online
//           </h1>
//         </div>
//       )}
//     </>
//   )
// }

// export default Spin;



// import React, { useState } from 'react';
// import logo from "../Assets/logo.jpg";
// import './style.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import leftImage from "../Assets/leftimage.webp"
// import centerImage from "../Assets/centerimage.webp"
// import rightImage from "../Assets/rightimage.webp";
// import { motion } from "framer-motion";

// function Spin() {
//   const [showFastContent, setShowFastContent] = useState(false);

//   const handleFastLinkClick = () => {
//     // Show the fast content when "Fast" link is clicked
//     setShowFastContent(true);
//   };

//   return (
//     <>
//       <div className='navhead'>
//         <img src={logo} alt='Logo' className='logo' />
//         <span>chrome</span>
//         <a>AI innovations</a>
//         <a>Features</a>
//         <a>Safety</a>
//         <a>By Google</a>
//         <a>Extensions</a>
//       </div>
//       <div>
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}>

//           <img src={logo} alt='Image' className='centerImage' />
//           <h3 className='heading1'>The Browser built to be yours </h3>
//           <div className='searchbar'>
//             <ul>
//               <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Update</Link></li>
//               <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>AI</Link></li>
//               <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Yours</Link></li>
//               <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Safe</Link></li>
//               {/* Add onClick event handler to the "Fast" link */}
//               <li><Link to='/fast' onClick={handleFastLinkClick} style={{ textDecoration: 'none', color: '#6c6e70' }}>Fast</Link></li>
//               <li><Link to='' style={{ textDecoration: 'none', color: '#6c6e70' }}>By Google</Link></li>
//             </ul>
//             <p className='paraone'>Need the Chrome Installer? <span className='clicklink'>Download Here</span> </p>
//           </div>
//         </motion.div>
//         <div className='imagesSection'>
//           <motion.div
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <img src={leftImage} alt='Google Images' className='overFlow' />
//           </motion.div>
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <img src={centerImage} alt='Google Images' className='overFlowcenter' />
//           </motion.div>
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <img src={rightImage} alt='Google Images' className='overFlow' />
//           </motion.div>
//         </div>
//       </div>
//       {/* Render the fast content when showFastContent state is true */}
//       {showFastContent && (
//         <div>
//           <h1>
//             The{" "}
//             <motion.span
//               className='fastcmp'
//               style={{ width: "140px", display: "inline-block" }}
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="spinner"></span>Fast
//             </motion.span>{" "}
//             ways to do Things Online
//           </h1>
//         </div>
//       )}
//     </>
//   )
// }

// export default Spin;



// import React, { useState } from 'react';
// import logo from "../Assets/logo.jpg";
// import './style.css';
// import { motion } from "framer-motion";

// function Spin() {
//   const [showFastContent, setShowFastContent] = useState(false);

//   const handleFastLinkClick = () => {
//     // Show the fast content when "Fast" link is clicked
//     setShowFastContent(true);
//   };

//   return (
//     <>
//       <div className='navhead'>
//         <img src={logo} alt='Logo' className='logo' />
//         <span>chrome</span>
//         <a>AI innovations</a>
//         <a>Features</a>
//         <a>Safety</a>
//         <a>By Google</a>
//         <a>Extensions</a>
//       </div>
//       <div>
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}>

//           <img src={logo} alt='Image' className='centerImage' />
//           <h3 className='heading1'>The Browser built to be yours </h3>
//           <div className='searchbar'>
//             <ul>
//               <li><a href='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Update</a></li>
//               <li><a href='' style={{ textDecoration: 'none', color: '#6c6e70' }}>AI</a></li>
//               <li><a href='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Yours</a></li>
//               <li><a href='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Safe</a></li>
//               {/* Use div instead of Link component for the "Fast" link */}
//               <li><div onClick={handleFastLinkClick} style={{ textDecoration: 'none', color: '#6c6e70', cursor: 'pointer' }}>Fast</div></li>
//               <li><a href='' style={{ textDecoration: 'none', color: '#6c6e70' }}>By Google</a></li>
//             </ul>
//             <p className='paraone'>Need the Chrome Installer? <span className='clicklink'>Download Here</span> </p>
//           </div>
//         </motion.div>
//         <div className='imagesSection'>
//           {/* Render the fast content when showFastContent state is true */}
//           {showFastContent && (
//             <div>
//               <h1>
//                 The{" "}
//                 <motion.span
//                   className='fastcmp'
//                   style={{ width: "140px", display: "inline-block" }}
//                   initial={{ y: 50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <span className="spinner"></span>Fast
//                 </motion.span>{" "}
//                 ways to do Things Online
//               </h1>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Spin;


import React, { useState } from 'react';
import logo from "../Assets/logo.jpg";
import './style.css';
import leftImage from "../Assets/leftimage.webp"
import centerImage from "../Assets/centerimage.webp"
import rightImage from "../Assets/rightimage.webp";
import { motion } from "framer-motion";

function Spin() {
  const [showFastContent, setShowFastContent] = useState(false);

  const handleFastLinkClick = () => {
    // Show the fast content when "Fast" link is clicked
    setShowFastContent(true);
  };

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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}>

          <img src={logo} alt='Image' className='centerImage' />
          <h3 className='heading1'>The Browser built to be yours </h3>
          <div className='searchbar'>
            <ul>
              <li><a href='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Update</a></li>
              <li><a href='' style={{ textDecoration: 'none', color: '#6c6e70' }}>AI</a></li>
              <li><a href='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Yours</a></li>
              <li><a href='' style={{ textDecoration: 'none', color: '#6c6e70' }}>Safe</a></li>
              {/* Use div instead of Link component for the "Fast" link */}
              <li><div onClick={handleFastLinkClick} style={{ textDecoration: 'none', color: '#6c6e70', cursor: 'pointer' }}>Fast</div></li>
              <li><a href='' style={{ textDecoration: 'none', color: '#6c6e70' }}>By Google</a></li>
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
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={centerImage} alt='Google Images' className='overFlowcenter' />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={rightImage} alt='Google Images' className='overFlow' />
          </motion.div>
        </div>
        {/* Render the fast content when showFastContent state is true */}
        {showFastContent && (
          <div>
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
          </div>
        )}
      </div>
    </>
  )
}

export default Spin;
