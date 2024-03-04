import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function MAD_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>DevOps </b>is a software development methodology that emphasizes collaboration, communication, and integration between software development (Dev) and IT operations (Ops) teams. The goal of DevOps is to streamline the software delivery process, increase the frequency of software releases, and improve the overall quality and reliability of software applications.
  </p>
    </div>
  )
}

export default MAD_Description

