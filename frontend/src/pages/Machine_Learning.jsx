import React from 'react'
import '../Styles/Experts.css'
import Navbar_2 from '../components/Navbar_2'
import Footer from '../components/Footer'
import Recommended from '../components/Recommended'
import Courses from '../components/Courses'
import Connect from '../components/Connect'
import ML_Description from '../components/ML_Description'

function Machine_Learning() {
  return (
    <div className='Ex_pge'>
      <div className='content-wrap'>
          <Navbar_2 />
          <ML_Description />
      </div>
      <Recommended />
      <Courses />
      <Connect />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Machine_Learning
