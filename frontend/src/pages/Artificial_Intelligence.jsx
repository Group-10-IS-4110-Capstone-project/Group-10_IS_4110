import React from 'react'
import '../pages/Artificial_Intelligence.css'
import Navbar_2 from '../components/Navbar_2'
import Footer from '../components/Footer'
import Recommended from '../components/Recommended'
import Courses from '../components/Courses'
import Connect from '../components/Connect'
import Description_AI from '../components/Description_AI'

function Artificial_Intelligence() {
  return (
    <div className='Ex_pge'>
      <div className='content-wrap'>
          <Navbar_2 />
          <Description_AI />
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

export default Artificial_Intelligence
