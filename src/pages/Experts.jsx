import React from 'react'
import Navbar_2 from '../components/Navbar_2'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import Description from '../components/Description'
import Recommended from '../components/Recommended'
import Courses from '../components/Courses'


function Experts() {
  return (
    <div className='Ex_pge'>
      <div className='content-wrap'>
          <Navbar_2 />
      </div>
      <Searchbar />
      <Description />
      <Recommended />
      <Courses />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Experts
