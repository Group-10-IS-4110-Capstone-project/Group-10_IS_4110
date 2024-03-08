import React from 'react'
import Footer from '../components/Footer'
import UnderNav_Bar from '../components/UnderNav_Bar'
import Chat from '../components/Chat'
import "./UndergraduateChat.css"

export default function () {
  return (
    <div>
        <div className="undergraduateForm-1">
            <div className="user-nav-1">
                <UnderNav_Bar></UnderNav_Bar>
            </div>
            <div className="user-profile-1">
                <Chat></Chat>
            </div>
            <div className="user-footer-1">
                <Footer></Footer>
            </div>
        </div>
    </div>
  )
}
