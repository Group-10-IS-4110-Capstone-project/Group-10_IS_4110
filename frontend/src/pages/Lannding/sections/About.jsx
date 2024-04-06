import React from "react";
/*import AboutBackground from "../Assets/about-background.png";*/
import AboutBackgroundImage from "../../../assets/au.png";


const About = () => {
  return (
    <section id="join-us" className="outer-container">
    <div className="about-section-container container">
      <div className="about-background-image-container">
       
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h2 className="secondary-heading">
        We Are Top network operators of tech experts and undergraduates.
        </h2>
        <p className="secondary-text">
        Welcome to our website, where technology meets excellence! As one of the foremost network operators, our team consists of highly skilled tech experts and ambitious undergraduates who are driven to make a difference in the digital world.


        </p>
        <p className="secondary-text">
        <h2 className="Third-heading"><u>Join Us</u></h2>
        Calling all tech-savvy undergraduates with a passion for IT!  Look no further! 
Join our thriving community of IT enthusiasts and gain access to a wealth of 
valuable insights tailored just for you.
        </p>
        <div className="about-buttons-container">
          
          
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
