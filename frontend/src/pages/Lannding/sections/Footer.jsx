import React from "react";
import Logo from "../../../assets/red.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span style={{color:"black", fontSize:"14px"}} ><b>Get in Touch</b></span>
          <span>Reach out and connect</span>
          <span>Empowering Communication</span>
          
        </div>
        <div className="footer-section-columns">
          <span style={{color:"black", fontSize:"14px"}}>Quick Accesses</span>
          <span>About Us</span>
          <span>Experts</span>
          <span>Contact Us</span>
          <span>Home</span>
          
        </div>
        <div className="footer-section-columns">
          <span style={{color:"black", fontSize:"14px"}}>Features</span>
          <span>IT Fields</span>
          <span>Explore jobs</span>
          <span>Blogs</span>
          <span>Chat</span>
          
        </div>
        <div className="footer-section-columns">
          <span style={{color:"black", fontSize:"14px"}}>Contact Info</span>
          <span>+94-11245627298</span>
          <span>itinsights@gmail.com</span>
          <span>itInsights</span>
        </div>
        <div className="footer-section-columns">
          <span style={{color:"black", fontSize:"14px"}}>Terms & Conditions</span>
          <span style={{color:"black", fontSize:"14px"}}>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
