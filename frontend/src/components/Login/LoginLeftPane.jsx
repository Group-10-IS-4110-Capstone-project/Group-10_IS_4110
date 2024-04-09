import React from 'react'
import "./LoginLeftPane.css"
import img from "../../assets/signup.png"

export default function LoginLeftPane() {
  return (
    <div >
      <div className='content'>
      <div className="title">
       <h1>Sign in</h1> 
        </div>
      <img src={img} alt="" className="img" />
    </div>
    </div>
    
  )
}
