import React from 'react'
import '../Styles/Navbar_1.css'
import LOGO from '../assets/White logo.png'

function Navbar_1() {
  return (
    <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <a href="index.html"><img src={LOGO} alt='' /></a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="home.html" className="active">Home</a></li>
                            <li><a href="account.html">Account</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="product details.html">Explore Now</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-2">
                        <h1>Cactus Plants <br />Gifts!</h1>
                        <p>Giftelo plants make wonderful gifts!<br />Custom Orders Available. Need Help? (618) 808-8008.</p>
                        <a href="products.html" className="btn">Explore Now &#8594;</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar_1
