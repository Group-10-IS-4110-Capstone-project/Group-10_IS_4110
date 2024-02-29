import React from 'react'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import "./Home.css"

import About from './sections/About'
import Explore from './sections/Explore'
import Career from './sections/Career'
import FAQSection from './sections/FAQSection'
import Contact_us from './sections/Contact_us'

const Home = () => {
  return (
    <div>
     
      <Hero />
     
      <About />
      <Explore />
      <Career/>
      <FAQSection/>
      <Contact_us/>

    </div>
  )
}

export default Home;
