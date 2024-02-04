import React from 'react'
import '../Styles/Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import LOGO from '../assets/White logo.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='fcontainer'>
        <div className='row'>

          <div className='footer-col-1'>
            <div className='app-logo'>
              <img src={LOGO} alt='' />
            </div>
          </div>

          <div className="footer-col-2">
            <h3>Get In Touch</h3>
              <p>Reach out and empowering seamless Interaction.</p>
            <ul>
              <FaFacebook  className='icon'/>
              <FaTwitter className='icon'/>
              <FaInstagram className='icon'/>
              <FaYoutube className='icon'/>
            </ul>
          </div>

          <div className="footer-col-2">
            <h3>Quick Access</h3>
            <ul>
              <li>About Us</li>
              <li>Experts</li>
              <li>Conatct Us</li>
              <li>Home</li>
            </ul>
          </div>

          <div className="footer-col-3">
            <h3>Features</h3>
            <ul>
              <li>IT field</li>
              <li>Explore Jobs</li>
              <li>Blog</li>
              <li>Chat</li>
            </ul>
          </div>

          <div className="footer-col-3">
            <h3>Contact Info</h3>
            <ul>
              <li>Telephone Number</li>
              <li>Email</li>
              <li>Facebook</li>
            </ul>
          </div>

        </div>

        <hr style={{ borderTop: '1px solid #ccc' }} />;
        <p className="copyright">IT INSIGHTS</p>
      </div>
    </div>
  )
}

export default Footer
