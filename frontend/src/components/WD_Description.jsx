import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function WD_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Web Development </b>refers to the process of creating websites and web applications that are accessible via the internet. It involves designing, coding, and building the structure, layout, and functionality of websites using various technologies such as HTML, CSS, JavaScript, and server-side programming languages like PHP, Python, or Ruby. Web development encompasses both front-end development, which focuses on the user interface and client-side functionality, and back-end development, which involves server-side logic and database management. Overall, web development plays a crucial role in enabling businesses and individuals to establish an online presence, interact with users, and deliver content and services over the World Wide Web.
  </p>
    </div>
  )
}

export default WD_Description


