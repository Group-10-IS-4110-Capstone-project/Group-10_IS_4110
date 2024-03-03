import React from 'react'
import '../Styles/Description.css'
import AI from '../assets/Artificial Intelligence.jpg'

function Description_AI() {
  return (
    <div className="data-science-container">
      <img src={AI} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Artificial intelligence </b>is a multidisciplinary field that merges computer science with extensive datasets to facilitate effective problem-solving. It includes sub-fields like machine learning, where algorithms learn patterns from data to make predictions or decisions, and deep learning, which employs neural networks to process complex data. These techniques enable AI systems to mimic human intelligence, recognize patterns, and adapt to new information. AI's ultimate goal is to develop autonomous systems capable of reasoning, understanding natural language, and performing tasks with high precision, revolutionizing industries and enhancing everyday life through intelligent automation and decision-making.
  </p>
    </div>
  )
}

export default Description_AI
