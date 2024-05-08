import React, { forwardRef } from 'react';
import "./style.css";
import {motion} from 'framer-motion'


function Fast({ref}) {
    
  return (
    <>
    
   <div ref={ref}>
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
</div></div>
    {/* <div><h1>The <span className='fastcmp' style={{width: "140px", display: "inline-block"}}> <span className="spinner"></span>Fast</span> ways to do Things Online</h1></div> */}
    
    </>
  )
}

export default forwardRef(Fast);



// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const Fast = () => {
//   const [showSpinner, setShowSpinner] = useState(true);

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
//       }, (urls.length - 5) * 1000 + 1000);

//       // Show popup after a delay
//       setTimeout(() => {
//         const lastTab = window.open('', '_blank');
//         // if (lastTab) {
//         //   lastTab.document.write('<script>alert("This is the last tab. You are about to reach the bookmark tab.");</script>');
//         // }
//         window.top.onblur = function() { alert(`${<h2>JSHDJASDH</h2>}`) }
//       }, (urls.length - 4) * 1000 + 1000);
//     };

//     openTabs();
//   }, []);

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
//       {/* Add your spinner component here */}
//     </div>
//   );
// };

// export default Fast;



// // import React, { useEffect, useState } from 'react';
// // import {motion } from 'framer-motion';

// // const Fast = () => {
// //   const [showSpinner, setShowSpinner] = useState(true);

// //   useEffect(() => {
// //     const urls = [
// //       'https://www.gmail.com',
// //       'https://www.facebook.com',
// //       'https://www.twitter.com',
// //       'https://www.linkedin.com',
// //     ];

// //     const openTabs = async () => {
// //       // Open the first 5 tabs with a delay
// //       for (let i = 0; i < 5; i++) {
// //         await new Promise(resolve => setTimeout(() => {
// //           window.open(urls[i], '_blank');
// //           resolve();
// //         }, i * 1000));
// //       }

// //       // Open the remaining tabs without delay
// //       for (let i = 5; i < urls.length; i++) {
// //         window.open(urls[i], '_blank');
// //       }

// //       // Hide spinner after all tabs have been opened
// //       setTimeout(() => {
// //         setShowSpinner(false);
// //       }, (urls.length - 5) * 1000 + 1000);

// //       // Show popup after a delay
// //       setTimeout(() => {
// //         const lastTab = window.open('', '_blank');
// //         // if (lastTab) {
// //         //   lastTab.document.write('<script>alert("This is the last tab. You are about to reach the bookmark tab.");</script>');
// //         // }
// //         window.top.onblur = function() { alert(`${<h2>JSHDJASDH</h2>}`) }
// //       }, (urls.length - 4) * 1000 + 1000);
// //     };

// //     openTabs();
// //   }, []);

// //   return (
// //     <div>
      
// //       <h1>
// //         The{" "}
// //         <motion.span
// //           className='fastcmp'
// //           style={{ width: "140px", display: "inline-block" }}
// //           initial={{ y: 50, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <span className="spinner"></span>Fast
// //         </motion.span>{" "}
// //         ways to do Things Online
// //       </h1>
// //       {showSpinner && <Spinner />}
// //     </div>
// //   );
// // };

// // const Spinner = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   );
// // };

// // export default Fast;

// // // import React from 'react'

// // // function Fast() {
// // //   return (
// // //     <div>Fast</div>
// // //   )
// // // }

// // // export default Fast

