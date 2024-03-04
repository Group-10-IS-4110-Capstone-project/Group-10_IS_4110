import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function DS_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Web Development </b>refers to the process of building, creating, and maintaining websites and web applications. It encompasses a variety of tasks, including web design, front-end development, back-end development, and web server configuration. Web developers use a combination of programming languages, frameworks, and tools to create functional and visually appealing websites that meet the needs of users and businesses.
  </p>
    </div>
  )
}

export default DS_Description

