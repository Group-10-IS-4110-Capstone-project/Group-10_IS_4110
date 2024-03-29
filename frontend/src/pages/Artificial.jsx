import React from 'react'
import '../Styles/Experts.css'
import Navbar_2 from '../components/Navbar_2'
import Footer from '../components/Footer'
import Recommended from '../components/Recommended'
import Courses_2 from '../components/Courses_2'
import Connect from '../components/Connect'
import AI_Description from '../components/AI_Description'
import '../Styles/Experts.css'

function Artificial() {
  return (
    <div className='Ex_pge'>
      <div className='content-wrap'>
          <Navbar_2 />
          <AI_Description />
      </div>

      <Recommended />
      <Courses_2 />
      <Connect />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Artificial