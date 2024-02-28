import React from 'react'
import '../Styles/Description.css'
import descri_img from '../assets/data science.jpg'

function Description() {
  return (
    <div className="description">
      <div className="small-container1">
        <div className="row">
          <div className="col-2">
            <img src={descri_img} alt='' />
          </div>
          <div className="col-2">
            <h1>Data Science</h1>
            <p>Data science continues to evolve as one of the 
most promising and in-demand career paths for
skilled professionals. Today, successful data 
professionals understand that they must advance 
past the traditional skills of analyzing large 
amounts of data, data mining, and programming 
skills. In order to uncover useful intelligence for 
their organizations, data scientists must master 
the full spectrum of the data science life cycle and 
possess a level of flexibility and understanding to 
maximize returns at each phase of the process.</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
