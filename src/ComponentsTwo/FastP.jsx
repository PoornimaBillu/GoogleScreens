import React from 'react';
import { motion } from "framer-motion";

function FastP() {
  return (
    <>
    <div id="fast">
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

export default FastP