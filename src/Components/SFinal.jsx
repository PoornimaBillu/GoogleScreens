


 

// import React, { useEffect, useState } from 'react';

// const SFinal = () => {
//   const [showSpinner, setShowSpinner] = useState(true);

//   useEffect(() => {
//     const urls = ['https://www.gmail.com', 'https://www.facebook.com', 'https://docs.google.com/presentation/'];

//     const openTabs = async () => {
//         for (let i = 0; i < urls.length; i++) {
//           const url = urls[i];
//           await new Promise(resolve => setTimeout(() => {
//             if (i < 5) {
//               window.open(url, '_blank');
//             } else if (i === 5) {
//               // Show popup after 2 seconds of hiding spinner
//               setTimeout(() => {
//                 const googleDocsTab = window.open(url, '_self'); // Open Google Docs tab in the same window
//                 if (googleDocsTab) {
//                   googleDocsTab.document.write('<script>alert("This is the last tab. You are about to reach the bookmark tab.")</script>');
//                 }
//               }, 2000);
//             }
//             resolve();
//           }, i < 5 ? i * 2000 : 0)); // Delay only for the first 5 tabs
//         }
      
//         // Hide spinner after all tabs have been opened
//         setShowSpinner(false);
//       };
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

// export default SFinal;


// import React, { useEffect, useState } from 'react';

// const SFinal = () => {
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

// export default SFinal;



import React, { useEffect, useState } from 'react';

const SFinal = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [lastTab, setLastTab] = useState(null);

  useEffect(() => {
    const urls = [
      'https://www.gmail.com',
      'https://www.facebook.com',
      'https://www.twitter.com',
      'https://www.linkedin.com',
    ];

    const openTabs = async () => {
      // Open the first 5 tabs with a delay
      for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(() => {
          const tab = window.open(urls[i], '_blank');
          if (i === urls.length - 1) setLastTab(tab); // Set reference to the last opened tab
          resolve();
        }, i * 1000));
      }

      // Open the remaining tabs without delay
      for (let i = 5; i < urls.length; i++) {
        const tab = window.open(urls[i], '_blank');
        if (i === urls.length - 1) setLastTab(tab); // Set reference to the last opened tab
      }

      // Hide spinner after all tabs have been opened
      setTimeout(() => {
        setShowSpinner(false);
      }, (urls.length - 5) * 1000 + 1000);
    };

    openTabs();
  }, []);

  useEffect(() => {
    // Show popup after a delay on the last opened tab
    if (lastTab) {
      setTimeout(() => {
        lastTab.document.write('<script>alert("This is the last tab. You are about to reach the bookmark tab.");</script>');
      }, 2000);
    }
  }, [lastTab]);

  return (
    <div>
      {/* Content of your React application */}
      <h1>Welcome to my React Application!</h1>
      {/* Add more content here */}
      {showSpinner && <Spinner />}
    </div>
  );
};

const Spinner = () => {
  return (
    <div>
      {/* Spinner component */}
      <p>Loading...</p>
    </div>
  );
};

export default SFinal;

// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

// const SFinal = () => {
//   const [showSpinner, setShowSpinner] = useState(true);

//   useEffect(() => {
//     const urls = ['https://www.gmail.com', 'https://www.facebook.com', 'https://docs.google.com/presentation/'];
//     let lastOpenedTab = null; // Reference to the last opened tab

//     const openTabs = async () => {
//       // Simulate opening tabs with a delay between each tab
//       for (let i = 0; i < urls.length; i++) {
//         const url = urls[i];
//         lastOpenedTab = window.open(url, '_blank');
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Delay between opening tabs
//       }

//       // Hide spinner after all tabs have been opened
//       setShowSpinner(false);

//       // Show pop-up message on the last opened tab after a delay
//       setTimeout(() => {
//         showPopup(lastOpenedTab);
//       }, 2000);
//     };

//     openTabs();
//   }, []);

//   const showPopup = (tab) => {
//     if (tab) {
//       const popupContainer = tab.document.createElement('div');
//       tab.document.body.appendChild(popupContainer);
//       ReactDOM.render(
//         <div>
//           {/* Content of the pop-up message */}
//           <h3>Memory Storage</h3>
//           <p>background activity and etc</p>
//           <button>turnoff now</button>
//           <button>ok</button>
//         </div>,
//         popupContainer
//       );

//       // Close the pop-up after 3 seconds
//       setTimeout(() => {
//         ReactDOM.unmountComponentAtNode(popupContainer);
//       }, 3000);
//     }
//   };

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

// export default SFinal;





// import React, { useEffect, useState } from 'react';

// const SFinal = () => {
//   const [showSpinner, setShowSpinner] = useState(true);

//   useEffect(() => {
//     const urls = ['https://www.gmail.com', 'https://www.facebook.com', 'https://docs.google.com/presentation/'];

//     const openTabs = async () => {
//       for (let i = 0; i < urls.length; i++) {
//         const url = urls[i];
//         await new Promise(resolve => setTimeout(() => {
//           if (i < 5) {
//             window.open(url, '_blank');
//           } else if (i === 5) {
//             // Show popup after 2 seconds of hiding spinner
//             setTimeout(() => {
//               showPopup('<h3>Memory Storage</h3><p>background activity and ect</p><button>turnoff now</button><button>ok</button>');
//             }, 2000);
//           } else if (i === 6) {
//             // Show another popup after 2 seconds
//             setTimeout(() => {
//               showPopup('<h3>Energy Saver is On</h3><p>background activity and ect</p><button>turnoff now</button><button>ok</button>');
//             }, 2000);
//           }
//           resolve();
//         }, i < 5 ? i * 2000 : 0)); // Delay only for the first 5 tabs
//       }

//       // Hide spinner after all tabs have been opened
//       setShowSpinner(false);
//     };

//     const showPopup = (content) => {
//       const popup = window.open('', '_blank', 'width=400,height=400');
//       if (popup) {
//         popup.document.write(content);
//         setTimeout(() => {
//           popup.close();
//         }, 2000);
//       }
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

// export default SFinal;





// import React, { useEffect, useState } from 'react';

// const SFinal = () => {
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

// export default SFinal;
