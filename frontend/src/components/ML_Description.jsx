import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function ML_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Mobile App Development </b>refers to the process of creating software applications specifically designed to run on mobile devices, such as smartphones and tablets. Mobile apps can be developed for various platforms, including iOS (Apple's operating system) and Android (Google's operating system), as well as cross-platform development frameworks that allow developers to build apps that can run on multiple platforms using a single codebase.
  </p>
    </div>
  )
}

export default ML_Description


