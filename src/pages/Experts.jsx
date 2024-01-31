import React from 'react'
import Navbar_2 from '../components/Navbar_2'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import Page_change_btn from '../components/Page_change_btn'


function Experts() {
  return (
    <div className='Ex_pge'>
      <div className='content-wrap'>
          <Navbar_2 />
      </div>
      <Searchbar />
      <Page_change_btn />
      <Footer />
    </div>
  )
}

export default Experts
