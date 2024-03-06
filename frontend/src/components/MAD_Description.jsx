import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function MAD_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Mobile App Development </b>is the process of creating software applications specifically designed to run on mobile devices, such as smartphones and tablets. With the increasing ubiquity and popularity of mobile devices, mobile app development has become a crucial aspect of software development, enabling businesses and individuals to reach and engage with their target audiences on-the-go.
  </p>
    </div>
  )
}

export default MAD_Description

