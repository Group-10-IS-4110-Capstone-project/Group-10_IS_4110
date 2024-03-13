import React from 'react'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import icon5 from "../assets/icon5.png"
import "./UnderNav_Bar.css"
import { Link } from 'react-router-dom';

export default function ExpertNav_Bar() {
  return (
    <div>
        <div className="user-navbar">
            <img src={icon1} alt="" className="nav-icon-1" />
            <div className="user-navbar-1">
                <Link to={""}><img src={icon2} alt="" className="nav-icon2" /></Link>
                <Link to={"/feed"}><img src={icon3} alt="" className="nav-icon2" /></Link>
                <Link to={"/feedEx"}><img src={icon4} alt="" className="nav-icon2" /></Link>
                <Link to={""}><img src={icon5} alt="" className="nav-icon2" /></Link>
                
            </div>
            <button className="nav-logout">Log Out</button>
        </div>
    </div>
  )
}
