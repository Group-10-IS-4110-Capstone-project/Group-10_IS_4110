import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function ML_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Machine Learning </b>is a branch of artificial intelligence that focuses on developing algorithms and models capable of learning from data to make predictions or decisions without being explicitly programmed. By analyzing and identifying patterns in data, machine learning algorithms can improve their performance over time, enabling applications such as predictive analytics, natural language processing, computer vision, and recommendation systems.
  </p>
    </div>
  )
}

export default ML_Description


