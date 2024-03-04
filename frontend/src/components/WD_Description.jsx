import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function WD_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Machine Learning </b>is a subset of artificial intelligence (AI) that focuses on developing algorithms and models that enable computers to learn from and make predictions or decisions based on data, without being explicitly programmed to do so. In essence, machine learning algorithms learn from patterns and insights found in data to improve their performance over time.
  </p>
    </div>
  )
}

export default WD_Description


