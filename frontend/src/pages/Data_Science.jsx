import React from 'react'
import '../pages/Data_Science.css'
import Navbar_2 from '../components/Navbar_2'
import Footer from '../components/Footer'
import Recommended from '../components/Recommended'
import Courses from '../components/Courses'
import Connect from '../components/Connect'
import Description from '../components/Description'

function Data_Science() {
  return (
    <div className='Ex_pge'>
      <div className='content-wrap'>
          <Navbar_2 />
          <Description />
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

export default Data_Science
