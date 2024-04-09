import React from 'react';
import NavBar from '../../Lannding/sections/NavBar'; 
import logo from "../../../assets/red.svg"; 


function AboutPage() {
  return (
    <div className='abti'>
      <NavBar />
      <div className="abt-container">
        <div className="abt-content">
        <h1>About Us</h1>
          {/* <img src={logo} alt="Abt Us" className="abt-image" /> */}
          <p className="abt-text">
           The mission of supporting the career development of IT undergraduates through industry experts is to bridge the gap between 
           academic learning and real-world industry requirements, thereby empowering students to succeed in their IT careers. 
           The primary focus is to provide students with practical insights, industry knowledge, and mentorship to enhance their skills, confidence, and employability
           in the IT sector Guidance and support are paramount,
           and the program provides clear instructions for identifying and contacting suitable tech experts. 
           Undergraduates can seek assistance and advice from these experts, helping them overcome challenges and make informed decisions about their career paths.
            <br />
            <br />
            The mission of supporting the career development of IT undergraduates through industry experts is to bridge the gap between 
           academic learning and real-world industry requirements, thereby empowering students to succeed in their IT careers. 
           The primary focus is to provide students with practical insights, industry knowledge, and mentorship to enhance their skills, confidence, and employability
           in the IT sector Guidance and support are paramount,
           and the program provides clear instructions for identifying and contacting suitable tech experts. 
           Undergraduates can seek assistance and advice from these experts, helping them overcome challenges and make informed decisions about their career paths.
          </p>

        </div>
      </div>
    </div>
  );
}

export default AboutPage;
