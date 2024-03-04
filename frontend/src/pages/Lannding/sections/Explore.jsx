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
    },
    {
      image: Devops,
    },
    {
      image: Mobile_App_dev,
    },

    {
      image: Cyber_Security,
    },
    {
      image:Data_Science,
    },
    {
      image:Machine_Learning,
    },
    {
      image:Cloud_Computing,
    },
    {
      image:Block_Chain,
    },
    {
      image:Web_Development,
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
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div> 
    
  );
};
export default Explore;
