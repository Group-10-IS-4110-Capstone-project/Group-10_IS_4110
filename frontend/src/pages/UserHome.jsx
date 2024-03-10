import React from 'react'
import UnderNav_Bar from '../components/UnderNav_Bar'
import Explore from './Lannding/sections/Explore'
import Footer from '../components/Footer'

export default function UserHome() {
  return (
    <div>
        <div className="undergraduateForm-1">
            <div className="user-nav-1">
                <UnderNav_Bar></UnderNav_Bar>
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
