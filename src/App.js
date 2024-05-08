import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Spin from './Components/Spin';
import Popups from './Components/Popups';
import Final from './Components/Final';
import SFinal from './Components/SFinal';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Fast from "./Components/Fast"
import { useEffect, useRef } from 'react';
import Raw from './Components/Raw';
import Navbar from './ComponentsTwo/Navbar';
import Home from './ComponentsTwo/Home';
import FastP from './ComponentsTwo/FastP';
import FinalC from './ComponentsTwo/FinalC';


function App() {
  return (
    <div className="App">
      <FinalC />
      {/* <Navbar />
      <Home />
      <FastP /> */}
      {/* <HomePage /> */}
      {/* <Raw /> */}
      {/* <BrowserRouter>
      <ScrollToTop />
      <Routes>
      
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/fast" element={<Fast />}></Route>
        
        </Routes>
        </BrowserRouter> */}
        <br></br><br></br>
        {/* <iframe width="960" height="515" src="https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm" frameborder="0" allowfullscreen></iframe> */}


        {/* <video width="960" height="515" autoPlay muted>
  <source src="https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm" type="video/webm" />
</video> */}


  {/* <BrowserRouter><Spin /></BrowserRouter> */}
      {/* <Spin /> */}
      {/* <Popups /> */}
     {/* <Final /> */}
     {/* <SFinal /> */}
    </div>
  );
//   function ScrollToTop() {
//     const { pathname } = useLocation();
//     const prevPathname = useRef(pathname);
  
//     useEffect(() => {
//       if (prevPathname.current !== pathname) {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         prevPathname.current = pathname;
//       }
//     }, [pathname]);
  
//     return null;
//   }
// }
}

export default App;
