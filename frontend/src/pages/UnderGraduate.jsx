import React from 'react'
import UnderNav_Bar from '../components/UnderNav_Bar'
import UnderProfile from '../components/UnderProfile'
import Footer from '../components/Footer'
import "./Undergraduate.css"

export default function () {
  return (
    <div>
        <div className="undergraduateForm">
            <div className="user-nav">
                <UnderNav_Bar></UnderNav_Bar>
            </div>
            <div className="user-profile">
                <UnderProfile></UnderProfile>
            </div>
            <div className="user-footer">
                <Footer></Footer>
            </div>
        </div>
    </div>
  )
}
