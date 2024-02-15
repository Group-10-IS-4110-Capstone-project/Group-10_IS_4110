import React from 'react'
import Hero from './sections/Hero'
import "./Home.css"
import About from './sections/About'
import Explore from './sections/Explore'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Explore />
    </div>
  )
}

export default Home
