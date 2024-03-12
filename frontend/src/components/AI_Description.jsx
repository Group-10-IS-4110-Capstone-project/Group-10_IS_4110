import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'
import Ai from '../assets/Artificial Intelligence.jpg'

function AI_Description() {
  return (
    <div className="data-science-container">
      <img src={Ai} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Artificial intelligence </b>is a multidisciplinary field that merges 
computer science with extensive datasets to facilitate effective 
problem-solving. It includes sub-fields like machine learning, 
where algorithms learn patterns from data to make predictions 
or decisions, and deep learning, which employs neural networks 
to process complex data. These techniques enable AI systems 
to mimic human intelligence, recognize patterns, and adapt to 
new information. AI's ultimate goal is to develop autonomous 
systems capable of reasoning, understanding natural language, 
and performing tasks with high precision, revolutionizing 
industries and enhancing everyday life through intelligent 
automation and decision-making.
  </p>
    </div>
  )
}

export default AI_Description

