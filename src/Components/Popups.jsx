// // // import React, { useState, useEffect } from 'react';
// // // import { motion } from 'framer-motion';

// // // const PopupMessage = ({ isVisible }) => {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: isVisible ? 1 : 0 }}
// // //       transition={{ duration: 0.5 }}
// // //       style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', zIndex: 9999 }}
// // //     >
// // //       <h3>Memory Storage</h3>
// // //       <div>
// // //         {/* Spinner animation */}
// // //         <p>Background activity and etc.</p>
// // //         <button>Turn off now</button>
// // //         <button>OK</button>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // const Popups = () => {
// // //   const [popupVisible, setPopupVisible] = useState(false);

// // //   useEffect(() => {
// // //     const urls = ['https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com'];

// // //     const openTabs = () => {
// // //       urls.forEach((url, index) => {
// // //         setTimeout(() => {
// // //           const newTab = window.open(url, '_blank');
// // //           // Close the popup on the first tab
// // //           if (index === 0) {
// // //             setPopupVisible(false);
// // //           }
// // //           // Show popup on the last tab
// // //           if (index === urls.length - 1) {
// // //             setPopupVisible(true);
// // //           }
// // //         }, (index + 1) * 1000); // Adjust delay time (in milliseconds) as needed
// // //       });
// // //     };

// // //     openTabs();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       {/* Content of your React application */}
// // //       <h1>Welcome to my React Application!</h1>
// // //       {/* Add more content here */}
// // //       <PopupMessage isVisible={popupVisible} />
// // //     </div>
// // //   );
// // // };

// // // export default Popups;
// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';

// // const PopupMessage = ({ isVisible }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: isVisible ? 1 : 0 }}
// //       transition={{ duration: 0.5 }}
// //       style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', zIndex: 9999 }}
// //     >
// //       <h3>Memory Storage</h3>
// //       <div>
// //         {/* Spinner animation */}
// //         <p>Background activity and etc.</p>
// //         <button>Turn off now</button>
// //         <button>OK</button>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // const Popups = () => {
// //   const [popupVisible, setPopupVisible] = useState(false);

// //   useEffect(() => {
// //     const urls = ['https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com'];

// //     const openTabs = () => {
// //       urls.forEach((url, index) => {
// //         setTimeout(() => {
// //           const newTab = window.open(url, '_blank');
// //           // Show popup only when opening the last tab
// //           if (index === urls.length - 1) {
// //             setPopupVisible(true);
// //           }
// //         }, (index + 1) * 1000); // Adjust delay time (in milliseconds) as needed
// //       });
// //     };

// //     openTabs();
// //   }, []);

// //   return (
// //     <div>
// //       {/* Content of your React application */}
// //       <h1>Welcome to my React Application!</h1>
// //       {/* Add more content here */}
// //       <PopupMessage isVisible={popupVisible} />
// //     </div>
// //   );
// // };

// // export default Popups;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const PopupMessage = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.10 }}
//       style={{
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         padding: '20px',
//         background: 'white',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         zIndex: 9999
//       }}
//     >
//       <h3>Memory Storage</h3>
//       <div>
//         {/* Spinner animation */}
//         <p>Background activity and etc.</p>
//         <button>Turn off now</button>
//         <button>OK</button>
//       </div>
//     </motion.div>
//   );
// };

// const Popups = () => {
//   const [lastTab, setLastTab] = useState(null);

//   useEffect(() => {
//     const urls = ['https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com'];

//     const openTabs = () => {
//       urls.forEach((url, index) => {
//         if (index < urls.length - 1) {
//           setTimeout(() => {
//             window.open(url, '_blank');
//           }, (index + 1) * 1000); // Adjust delay time (in milliseconds) as needed
//         } else {
//           const newTab = window.open(url, '_blank');
//           setLastTab(newTab);
//         }
//       });
//     };

//     openTabs();
//   }, []);

//   return (
//     <div>
//       {/* Content of your React application */}
//       <h1>Welcome to my React Application!</h1>
//       {/* Add more content here */}
//       {lastTab && <PopupMessage />}
//     </div>
//   );
// };

// export default Popups;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PopupMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 9999
      }}
    >
      <h3>Memory Storage</h3>
      <div>
        {/* Spinner animation */}
        <p>Background activity and etc.</p>
        <button>Turn off now</button>
        <button>OK</button>
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const urls = [
      'https://www.example.com'
    ];

    const openTabs = () => {
      const newTabs = urls.map((url, index) => {
        if (index === urls.length - 1) {
          return window.open(url, '_blank', 'noopener,noreferrer');
        } else {
          setTimeout(() => {
            window.open(url, '_blank', 'noopener,noreferrer');
          }, (index + 1) * 1000);
          return null;
        }
      });

      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 2000);
    };

    openTabs();
  }, []);

  return (
    <div>
      {/* Content of your React application */}
      <h1>Welcome to my React Application!</h1>
      {/* Add more content here */}
      {popupVisible && <PopupMessage /> || <h2>Loadingggg......</h2>}
    </div>
  );
};

export default HomePage;

