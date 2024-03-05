import React from "react";
import SE from "../../../assets/C_images/SE.png";
import web_dev from "../../../assets/C_images/web_dev.png";
import DA from "../../../assets/C_images/DA.png";
import cloud from "../../../assets/C_images/cloud.png";
import UI from "../../../assets/C_images/UI.png";
import Nw_eng from "../../../assets/C_images/Nw_eng.png";
import HE from "../../../assets/C_images/HE.png";
import pm from "../../../assets/C_images/pm.png";
import CS_eng from "../../../assets/C_images/CS_eng.png";



const Career = () => {
  const workInfoData = [
    {
      image: SE, 
      description:"Software Engineer",
    },
    {
      image: web_dev,
      description:"Web Developer",
    },
    {
      image: DA,
      description:"Database Analyst",
    },

    {
      image: cloud,
      description:"Cloud Engineer",
    },
    {
      image:UI,
      description:"UI/UX Engineer",
    },
    {
      image:Nw_eng,
      description:"Network Engineer",
    },
    {
      image:HE,
      description:"Hardware Engineer",
    },
    {
      image:pm,
      description:"Project Manager",
    },
    {
      image:CS_eng,
      description:"Cyber Security Engineer",
    },
    


  ];
  return (
    
  <div className="career-section-wrapper container">
      <div className="career-section-top">
        <p className="primary-subheading">Information Technology Career is Right For You</p>
       
      </div>
      <div className="career-section-bottom">
        {workInfoData.map((data) => (
          <div className="career-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.description} />
            </div>
            <h4 style={{fontSize:'16px', color:'black'}}>{data.description}</h4>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div> 
    
  );
};
export default Career;
