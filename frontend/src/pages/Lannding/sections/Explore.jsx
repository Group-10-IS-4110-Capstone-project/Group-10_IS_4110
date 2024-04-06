import React from "react";
import AI from "../../../assets/Group 6.png";
import Devops from "../../../assets/Group 7.png";
import Mobile_App_dev from "../../../assets/Group 8.png";
import Cyber_Security from "../../../assets/Group 9.png";
import Data_Science from "../../../assets/Group 10.png";
import Machine_Learning from "../../../assets/Group 11.png";
import Cloud_Computing from "../../../assets/Group 12.png";
import Block_Chain from "../../../assets/Group 13.png";
import Web_Development from "../../../assets/Group 14.png";



const Explore = () => {
  const workInfoData = [
    {
      image: AI, 
      path:"/ai"
    
    },
    {
      image: Devops,
      path:"/devops"
    },
    {
      image: Mobile_App_dev,
      path:"/mobile-app-dev"
    },

    {
      image: Cyber_Security,
      path:"/cyber-security"
    },
    {
      image:Data_Science,
      path:"/experts"
    },
    {
      image:Machine_Learning,
      path:"/machine-learning"
    },
    {
      image:Cloud_Computing,
      path:"/cloud-computing"
    },
    {
      image:Block_Chain,
      path:"/block-chain"
    },
    {
      image:Web_Development,
      path:"/web-development"
    },
    


  ];
  return (
    
  <div className="work-section-wrapper container">
      <div className="work-section-top">
        <p className="primary-subheading">Explore IT Fields</p>
        <p className="primary-text primary-text-2">
        understand the different specializations, career paths, and opportunities available 
within the IT industry.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <a className="work-section-info" key={data.title} href={data.path}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </a>
        ))}
      </div>
    </div> 
    
  );
};
export default Explore;
