import React from 'react'
import '../Styles/Profile_later.css'
import Photo from '../assets/profile.png'
import Button from 'react-bootstrap/Button';
import Pen from '../assets/Vector_pen.png'




function Profile_later() {
  return (
    <div className="Profile_later">
        <div className="Profi">
                        <img
                        className="Pr-image"
                        alt=""
                        src={Photo}
                        />
        </div>
        <div className="Prof_btn">
        <Button variant="secondary">
        <img
                        className="Pen-image"
                        alt=""
                        src={Pen}
                        />
            Edit profile</Button>{' '}

            
                        
        </div>

                       
    </div>
  )
}

export default Profile_later

