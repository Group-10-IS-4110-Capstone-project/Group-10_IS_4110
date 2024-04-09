import React from 'react'
import ExpertNav_Bar from '../components/ExpertNav_Bar'
import ChatEx from '../components/ChatEx'
import "./UndergraduateChat.css"
import Footer from '../components/Footer'

export default function ExpertChat() {
  return (
    <div>
        <div className="undergraduateForm-1">
            <div className="user-nav-1">
                <ExpertNav_Bar></ExpertNav_Bar>
            </div>
            <div className="user-profile-1">
                <ChatEx></ChatEx>
            </div>
            <div className="user-footer-1">
                <Footer></Footer>
            </div>
        </div>
    </div>
  )
}
