import React from "react";
import NavBar from './NavBar';
// import BannerBackground from "../assets/Background.png";
import BannerImage from "../../../assets/1imag.png"



const Hero = () => {
  return (
    <div className="outer-container outer-home-container">
    <div className="home-container container">
    <NavBar/> 
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to IT Insights
          </h1>
          <p className="primary-text">
            Explore your career journey !
          </p>
          <div className="cta-btns">
         
            <a className="secondary-button" href="#join-us">
              Join Us
            </a>
            <a className="btn-outline">Learn more</a>

          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
