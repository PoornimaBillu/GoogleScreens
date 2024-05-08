import React from "react";
import "./Skills.css";

function Skills(){
    return(
        
<section id="skills">
   <span className="skillTitle">What I do</span><br></br>
   <span className="skillDescription">I am a skilled and passionate webdesigner with experience in creating wedDesigns Using HTML,CSS,JavaScript & React js. </span>
<div className="skillBars">
<div className="skillBar">
    
    <div className="skillBarText">
        <h2 className="skillBarText">UI/UX Design</h2>
<p>This is a demo text ,You can write your own content here</p>
    </div>
</div>

<div className="skillBar">
    <img src={webDesign} alt="WEB Designer" className="skillBarImg" />
    <div className="skillBarText">
        <h2>WEB Design</h2>
<p>this is a demo text can be changed while making the production ready website</p>
    </div>
</div>

<div className="skillBar">
    <img src={AppDesing} alt="APP Designer" className="skillBarImg" />
    <div className="skillBarText">
        <h2>APP Design</h2>
<p>you can write text related to mobile app development </p>
    </div>
</div>
</div>
</section>
        
    );
}
export default Skills;