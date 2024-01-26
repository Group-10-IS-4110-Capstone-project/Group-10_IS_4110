import React from 'react'
import LoginLeftPane from '../../components/Login/LoginLeftPane'
import './Login.css'
import LoginRightPane from '../../components/Login/LoginRightPane'

export default function Login() {
  return (
    <div >
      <div className="loginpage-content">
        <div className="leftpane">
          <LoginLeftPane></LoginLeftPane>
        </div>
        <div className="rightpane">
          <LoginRightPane></LoginRightPane>
        </div>
      </div>
    </div>
  )
}
