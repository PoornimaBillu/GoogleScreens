// import React, { useEffect } from 'react';

// const Final = () => {
//   useEffect(() => {
//     // Array of URLs to open in new tabs
//     const urls = ['https://www.gmail.com', 'https://www.facebook.com', 'https://www.twitter.com', 'https://www.linkedin.com'];

//     // Function to open URLs in new tabs with a delay
// const openTabs = () => {
//     // Render the first 5 tabs with a one-second gap between each tab
//     urls.slice(0, 5).forEach((url, index) => {
//       setTimeout(() => {
//         window.open(url, '_blank');
//       }, index * 2000); // Adjust delay time (in milliseconds) as needed
//     });
  
//     // Render the remaining tabs (starting from the 6th URL) immediately
//     urls.slice(5).forEach((url) => {
//       window.open(url, '_blank');
//     });
//   };
  

// //     // Call the function to open tabs
//     openTabs();
//    }, []);

//   return (
//     <div>
//       {/* Content of your React application */}
//       <h1>Welcome to my React Application!</h1>
//       {/* Add more content here */}
//     </div>
//   );
// };

// export default Final;

// // import React, { useEffect } from 'react';

// // const Final = () => {
// //   useEffect(() => {
// //     // Array of URLs to open in new tabs
// //     const urls = ['https://www.gmail.com', 'https://www.facebook.com', 'https://www.twitter.com', 'https://www.linkedin.com', 'https://www.instagram.com'];
    
// //     // Function to open URLs in new tabs with a delay
// //     const openTabs = () => {
// //       // Render the first 5 tabs with a one-second gap between each tab
// //       urls.slice(0, 5).forEach((url, index) => {
// //         setTimeout(() => {
// //           window.open(url, '_blank');
// //         }, index * 1000); // Adjust delay time (in milliseconds) as needed
// //       });

// //       // Render the remaining tabs immediately after the first 5 tabs
// //       urls.slice(5).forEach((url) => {
// //         window.open(url, '_blank');
// //       });
// //     };

// //     // Call the function to open tabs
// //     openTabs();
// //   }, []);

// //   return (
// //     <div>
// //       {/* Content of your React application */}
// //       <h1>Welcome to my React Application!</h1>
// //       {/* Add more content here */}
// //     </div>
// //   );
// // };

// // export default Final;

// const openTabs = () => {
//     // Render the first 5 tabs with a one-second gap between each tab
//     urls.slice(0, 5).forEach((url, index) => {
//       setTimeout(() => {
//         window.open(url, '_blank');
//       }, index * 2000); // Adjust delay time (in milliseconds) as needed
//     });
  
//     // Render the remaining tabs (starting from the 6th URL) immediately
//     urls.slice(5).forEach((url) => {
//       window.open(url, '_blank');
//     });
//   };
  
// it give load new tabs and popup alert in first page

// import React, { useEffect, useState } from 'react';

// const Final = () => {
//   const [showSpinner, setShowSpinner] = useState(true);

//   useEffect(() => {
//     const urls = ['https://www.gmail.com', 'https://www.facebook.com', 'https://www.twitter.com', 'https://www.linkedin.com'];

//     const openTabs = () => {
//       // Open the first 5 tabs with a delay
//       urls.slice(0, 5).forEach((url, index) => {
//         setTimeout(() => {
//           window.open(url, '_blank');
//         }, index * 2000); // Adjust delay time (in milliseconds) as needed
//       });

//       // Open the remaining tabs without delay
//       setTimeout(() => {
//         urls.slice(5).forEach((url) => {
//           window.open(url, '_blank');
//         });
//       }, 5 * 2000); // Delay for the first 5 tabs

//       // Show spinner for 2 seconds before showing the alert
//       setTimeout(() => {
//         setShowSpinner(false);
//         // Display popup alert after spinner disappears
//         alert('Almost there! You are about to reach the bookmark tab.');
//       }, 7 * 2000); // Adjust delay time accordingly (7 * 2000 milliseconds for 5 tabs + 2 seconds)
//     };

//     openTabs();
//   }, []);

//   return (
//     <div>
//       {/* Content of your React application */}
//       <h1>Welcome to my React Application!</h1>
//       {/* Add more content here */}
//       {showSpinner && <Spinner />}
//     </div>
//   );
// };

// const Spinner = () => {
//   return (
//     <div>
//       {/* Spinner component */}
//       <p>Loading...</p>
//     </div>
//   );
// };

// export default Final;

// it was giving popup in first page

// import React, { useEffect, useState } from 'react';

// const Final = () => {
//   const [showSpinner, setShowSpinner] = useState(true);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const urls = ['https://www.gmail.com', 'https://www.facebook.com', 'https://www.twitter.com', 'https://www.linkedin.com'];

//     const openTabs = () => {
//       // Open the first 5 tabs with a delay
//       urls.slice(0, 5).forEach((url, index) => {
//         setTimeout(() => {
//           window.open(url, '_blank');
//         }, index * 2000); // Adjust delay time (in milliseconds) as needed
//       });

//       // Open the remaining tabs without delay
//       setTimeout(() => {
//         urls.slice(5).forEach((url) => {
//           window.open(url, '_blank');
//         });
//       }, 5 * 2000); // Delay for the first 5 tabs

//       // Hide spinner after 2 seconds and show popup
//       setTimeout(() => {
//         setShowSpinner(false);
//         setTimeout(() => {
//           setShowPopup(true);
//         }, 2000); // Show popup after 2 seconds
//       }, 7 * 2000); // Adjust delay time accordingly (7 * 2000 milliseconds for 5 tabs + 2 seconds)
//     };

//     openTabs();
//   }, []);

//   return (
//     <div>
//       {/* Content of your React application */}
//       <h1>Welcome to my React Application!</h1>
//       {/* Add more content here */}
//       {showSpinner && <Spinner />}
//       {showPopup && <Popup />}
//     </div>
//   );
// };

// const Spinner = () => {
//   return (
//     <div>
//       {/* Spinner component */}
//       <p>Loading...</p>
//     </div>
//   );
// };

// const Popup = () => {
//   return (
//     <div className="popup">
//       {/* Popup window */}
//       <p>You are about to reach the bookmark tab.</p>
//     </div>
//   );
// };

// export default Final;


// 

// import React, { useEffect, useState } from 'react';

// const Final = () => {
//   const [showSpinner, setShowSpinner] = useState(true);

//   useEffect(() => {
//     const urls = ['https://www.gmail.com', 'https://www.facebook.com', 'https://www.twitter.com', 'https://www.linkedin.com'];

//     const openTabs = () => {
//       // Open the first 5 tabs with a delay
//       urls.slice(0, 5).forEach((url, index) => {
//         setTimeout(() => {
//           window.open(url, '_blank');
//         }, index * 2000); // Adjust delay time (in milliseconds) as needed
//       });

//       // Open the remaining tabs without delay
//       setTimeout(() => {
//         urls.slice(5).forEach((url) => {
//           window.open(url, '_blank');
//         });
//       }, 5 * 2000); // Delay for the first 5 tabs
//     };

//     openTabs();

//     // Hide spinner after all tabs have been opened
//     setTimeout(() => {
//       setShowSpinner(false);
//       // Show popup after 2 seconds of hiding spinner
//       setTimeout(() => {
//         alert('This is the last tab. You are about to reach the bookmark tab.');
//       }, 2000);
//     }, 7 * 2000); // Adjust delay time accordingly (7 * 2000 milliseconds for 5 tabs + 2 seconds)
//   }, []);

//   return (
//     <div>
//       {/* Content of your React application */}
//       <h1>Welcome to my React Application!</h1>
//       {/* Add more content here */}
//       {showSpinner && <Spinner />}
//     </div>
//   );
// };

// const Spinner = () => {
//   return (
//     <div>
//       {/* Spinner component */}
//       <p>Loading...</p>
//     </div>
//   );
// };

// export default Final;




// it was giving last tab alert message:


// import React, { useEffect, useState } from 'react';

// const Final = () => {
//   const [showSpinner, setShowSpinner] = useState(true);

//   useEffect(() => {
//     const urls = ['https://www.gmail.com', 'https://www.facebook.com', 'https://www.twitter.com', 'https://www.linkedin.com'];

//     const openTabs = async () => {
//       for (let i = 0; i < urls.length; i++) {
//         const url = urls[i];
//         await new Promise(resolve => setTimeout(() => {
//           window.open(url, '_blank');
//           resolve();
//         }, i < 5 ? i * 2000 : 0)); // Delay only for the first 5 tabs
//       }

//       // Hide spinner after all tabs have been opened
//       setShowSpinner(false);

//       // Show popup after 2 seconds of hiding spinner
//       setTimeout(() => {
//         const lastTab = window.open('', '_blank');
//         if (lastTab) {
//           lastTab.document.write('<script>alert("This is the last tab. You are about to reach the bookmark tab.");</script>');
//         }
//       }, 2000);
//     };

//     openTabs();
//   }, []);

//   return (
//     <div>
//       {/* Content of your React application */}
//       <h1>Welcome to my React Application!</h1>
//       {/* Add more content here */}
//       {showSpinner && <Spinner />}
//     </div>
//   );
// };

// const Spinner = () => {
//   return (
//     <div>
//       {/* Spinner component */}
//       <p>Loading...</p>
//     </div>
//   );
// };

// export default Final;


// giving last tab as blank with poopupmessage alert

// import React, { useEffect, useState } from 'react';

// const Final = () => {
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
//         if (lastTab) {
//           lastTab.document.write('<script>alert("This is the last tab. You are about to reach the bookmark tab.");</script>');
//         }
//       }, (urls.length - 4) * 1000 + 1000);
//     };

//     openTabs();
//   }, []);

//   return (
//     <div>
//       {/* Content of your React application */}
//       <h1>Welcome to my React Application!</h1>
//       {/* Add more content here */}
//       {showSpinner && <Spinner />}
//     </div>
//   );
// };

// const Spinner = () => {
//   return (
//     <div>
//       {/* Spinner component */}
//       <p>Loading...</p>
//     </div>
//   );
// };

// export default Final;



// import React, { useEffect, useState } from 'react';

// const Final = () => {
//   const [showSpinner, setShowSpinner] = useState(true);
//   const [showPopup, setShowPopup] = useState(false);

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
//         }, i * 2000));
//       }

//       // Open the remaining tabs without delay
//       for (let i = 5; i < urls.length; i++) {
//         window.open(urls[i], '_blank');
//       }

//       // Hide spinner after all tabs have been opened
//       setTimeout(() => {
//         setShowSpinner(false);
//       }, (urls.length - 5) * 2000 + 1000);

//       // Show popup after a delay
//       setTimeout(() => {
//         setShowPopup(true);
//         // Hide popup after 2 seconds
//         setTimeout(() => {
//           setShowPopup(false);
//           // Show another popup after hiding the first one
//           setTimeout(() => {
//             window.alert("Another popup message.");
//           }, 2000);
//         }, 2000);
//       }, (urls.length - 5) * 2000 + 2000);
//     };

//     openTabs();
//   }, []);

//   return (
//     <div>
//       {/* Content of your React application */}
//       <h1>Welcome to my React Application!</h1>
//       {/* Add more content here */}
//       {showSpinner && <Spinner />}
//       {showPopup && <Popup />}
//     </div>
//   );
// };

// const Spinner = () => {
//   return (
//     <div>
//       {/* Spinner component */}
//       <p>Loading...</p>
//     </div>
//   );
// };

// const Popup = () => {
//   return (
//     <div>
//       {/* Popup component */}
//       <p>This is a popup message.</p>
//     </div>
//   );
// };

// export default Final;


//it was showing popupmessage on first tab

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const PopupMessage = ({ isVisible }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: isVisible ? 1 : 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', zIndex: 9999 }}
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

// const Final = () => {
//   const [popupVisible, setPopupVisible] = useState(false);

//   useEffect(() => {
//     const urls = ['https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com', 'https://www.example.com'];

//     const openTabs = () => {
//       urls.forEach((url, index) => {
//         setTimeout(() => {
//           const newTab = window.open(url, '_blank');
//           // Close the popup on the first tab
//           if (index === 0) {
//             setPopupVisible(false);
//           }
//           // Show popup on the last tab
//           if (index === urls.length - 1) {
//             setPopupVisible(true);
//           }
//         }, (index + 1) * 1000); // Adjust delay time (in milliseconds) as needed
//       });
//     };

//     openTabs();
//   }, []);

//   return (
//     <div>
//       {/* Content of your React application */}
//       <h1>Welcome to my React Application!</h1>
//       {/* Add more content here */}
//       <PopupMessage isVisible={popupVisible} />
//     </div>
//   );
// };

// export default Final;



// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const PopupMessage = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
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

// const Final = () => {
//   const [lastTab, setLastTab] = useState(null);

//   useEffect(() => {
//     const urls = ['https://www.example.com', 'https://www.example.com'];

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

// export default Final;







import React, { useEffect } from 'react';

const Final = () => {
  useEffect(() => {
    // Array of URLs to open in new tabs
    const urls = ['https://www.gmail.com', 'https://www.facebook.com'];
    
    // Function to open URLs in new tabs with a delay
    const openTabs = () => {
      // Render the first 5 tabs with a one-second gap between each tab
      urls.slice(0, 5).forEach((url, index) => {
        setTimeout(() => {
          window.open(url, '_blank');
        }, index * 1000); // Adjust delay time (in milliseconds) as needed
      });

      // Render the remaining tabs immediately after the first 5 tabs
      urls.slice(5).forEach((url) => {
        window.open(url, '_blank');
      });
    };

    // Call the function to open tabs
    openTabs();
  }, []);

  return (
    <div>
      {/* Content of your React application */}
      <h1>Welcome to my React Application!</h1>
      {/* Add more content here */}
    </div>
  );
};

export default Final;