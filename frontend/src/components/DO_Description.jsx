import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function DO_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>DevOps </b>is a set of practices, principles, and cultural philosophies aimed at improving collaboration and efficiency between software development (Dev) and IT operations (Ops) teams throughout the software development lifecycle. The primary goal of DevOps is to automate and streamline the process of building, testing, deploying, and maintaining software applications, thereby enabling organizations to deliver high-quality software more rapidly and reliably.
  </p>
    </div>
  )
}

export default DO_Description

