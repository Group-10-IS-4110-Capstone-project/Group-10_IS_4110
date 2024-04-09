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
      path:"/Artificial"
    
    },
    {
      image: Devops,
      path:"/DevOps"
    },
    {
      image: Mobile_App_dev,
      path:"/Mobile_app_Dev"
    },

    {
      image: Cyber_Security,
      path:"/Cyber_Security"
    },
    {
      image:Data_Science,
      path:"/Data_Science"
    },
    {
      image:Machine_Learning,
      path:"/Machine_Learning"
    },
    {
      image:Cloud_Computing,
      path:"/Cloud_Computing"
    },
    {
      image:Block_Chain,
      path:"/BlockChain"
    },
    {
      image:Web_Development,
      path:"/Web_Development"
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
