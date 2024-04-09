import React from 'react'
import "./SignUpLeftPane.css"
import img from "../../assets/signup.png"


export default function SignUpLeftPane() {
  return (
    <div>
      <div className='content-signup'>
      <div className="title signuptitle">
       <h1>Sign Up</h1> 
        </div>
      <img src={img} alt="" className="img img-1" />
    </div>
    </div>
  )
}
