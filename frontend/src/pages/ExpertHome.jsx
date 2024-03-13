import React from 'react'
import ExpertNav_Bar from '../components/ExpertNav_Bar'
import Explore from './Lannding/sections/Explore'
import Footer from '../components/Footer'

export default function ExpertHome() {
  return (
    <div>
        <div className="undergraduateForm-1">
            <div className="user-nav-1">
                <ExpertNav_Bar></ExpertNav_Bar>
            </div>
            <div className="userhome">
                <Explore></Explore>
            </div>
            <div className="user-footer-1">
                <Footer></Footer>
            </div>
        </div>
    </div>
  )
}
