import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function AI_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Cloud Computing </b>is a technology that enables users to access and utilize computing resources, such as servers, storage, databases, networking, software, and more, over the internet. Instead of owning and maintaining physical hardware and infrastructure, users can leverage cloud services provided by third-party providers to run their applications, store their data, and perform various computing tasks.
  </p>
    </div>
  )
}

export default AI_Description

