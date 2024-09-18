// About.js
import React from 'react';
import "./about.css";



function About() {
  return (
    <div className='main'>
       <div className='mainofabout'>
          Objective
        </div>
    <div className='para'>
    
A motivated and dedicated computer science student with a strong passion for web development and 
technology innovation. Currently pursuing a Bachelor of Science in Computer Science, I am eager to apply my 
theoretical knowledge and practical skills to real-world projects in a professional setting. Seeking an internship 
opportunity to gain hands-on experience and contribute to impactful projects in the field of web development.
    </div>
    <div className='mainofabout'>
          Education
        </div>
        <div className='para'>
        Bachelor of Science in Computer Science
          Jimma University, Ethiopia
           (Expected Graduation: 2017 E.C)
        </div>
        <div className='mainofabout'>
          my projects
        </div>
        <ul className='k'>
        <li>
        SmartMenu <br/>
 Developed a web-based food ordering system with an intuitive user interface using HTML, CSS, and 
Bootstrap framework.
        </li>
        <li>
        Nefilx website

        </li>
        <li>
        Apple Website

        </li>
      </ul>


    </div>
   
  );
}

export default About;
