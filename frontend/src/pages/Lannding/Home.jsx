import React from 'react'
import Hero from './sections/Hero'

import "./Home.css"

import About from './sections/About'
import Explore from './sections/Explore'
import Career from './sections/Career'
import FAQSection from './sections/FAQSection'
import Contact_us from './sections/Contact_us'
import Footer from './sections/Footer'

const Home = () => {
  return (
    <div>
     
      <Hero />
     
      <About />
      <Explore />
      <Career/>
      <FAQSection/>
      <Contact_us/>
      <Footer/>

    </div>
  )
}

export default Home;
