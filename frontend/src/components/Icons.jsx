import React from 'react'
import '../Styles/Icons.css'
import Home from '../assets/Home Vector.png'
import Chat from '../assets/Chat Vector.png'
import Conte from '../assets/content Vector.png'
import person from '../assets/user-alt.png'
import Line from '../assets/Line 4.png'
import Photo from '../assets/image-removebg-preview (1) 3.png'

import Button from 'react-bootstrap/Button';

import Searchbar from '../components/Searchbar'




function Icons() {
  return (
    <div className="Icon-bar">
                      <div className="Photo">
                        <img
                        className="Ph-image"
                        alt=""
                        src={Photo}
                        />
                        </div>

            <div className="Icons">
      
                    <div className="Home">
                        <img
                        className="image"
                        alt=""
                        src={Home}
                        />
                    </div>

                    <div className="Home">
                        <img
                        className="image"
                        alt=""
                        src={Chat}
                        />
                    </div>

                    <div className="Home">
                        <img
                        className="image"
                        alt=""
                        src={Conte}
                        />
                    </div>

                    <div className="Home">
                        <img
                        className="image"
                        alt=""
                        src={person}
                        />
                    </div>


            </div>

      <div className="Line">
        <img
          className="Line"
          alt=""
          src={Line}
        />

      

      </div>

      <div className="Butn">
      <Button variant="secondary">Log out</Button>{' '}
      

      </div>

      <div className="search">
      
     <Searchbar/>


      </div>


    </div>
  )
}

export default Icons

