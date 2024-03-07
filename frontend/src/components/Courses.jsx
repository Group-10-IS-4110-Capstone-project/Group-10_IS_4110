import React from 'react'
import '../Styles/Courses.css'
import img1 from '../assets/Ellipse 32.png'
import img2 from '../assets/Ellipse 33.png'
import img3 from '../assets/Ellipse 34.png'
import img4 from '../assets/Ellipse 35.png'
import img5 from '../assets/Ellipse 36.png'
import Re1 from '../assets/Advertisements/ad1.jpeg'
import Re2 from '../assets/Advertisements/ad2.jpeg'
import Re3 from '../assets/Advertisements/ad3.jpeg'
import Re4 from '../assets/Advertisements/ad4.jpeg'

import Page_change_btn from '../components/Page_change_btn'

function Courses() {
  return (
    <div class="courses">
        <h2 class="title">Online Courses and Certificates</h2>
    	<div class="small-container">
    		<div class="row">
    			<div class="col-3">
                <img src={img1} alt='' />
                <h3>Great learning</h3>
    				<p><b>Data Science </b>Specialization and other related courses.</p>
    			</div>
    			<div class="col-3">
                <img src={img2} alt='' />
                <h3>Udacity</h3>
    				<p><b>Data Science </b>Specialization and other related courses.</p>
    			</div>
    			<div class="col-3">
                <img src={img3} alt='' />
                <h3>Coursera</h3>
    				<p><b>Data Science </b>Specialization and other related courses.</p>
    			</div>
    		</div>
            <div className="row">
            <div class="col-3">
                <img src={img4} alt='' />
                <h3>Udemy</h3>
    				<p><b>Data Science </b>Specialization and other related courses.</p>
    			</div>
    			<div class="col-3">
                <img src={img5} alt='' />
                <h3>Solo learn</h3>
    				<p><b>Data Science </b>Specialization and other related courses.</p>
    			</div>
            </div>
    	</div>
        <div className="row1">
  <div class="col-32">
    <img src={Re1} alt='' />
  </div>
  <div class="col-32">
    <img src={Re2} alt='' />
  </div>
  <div class="col-32">
    <img src={Re3} alt='' />
  </div>
  <div class="col-32">
    <img src={Re4} alt='' />
  </div>
</div>

        <Page_change_btn />
    </div>

  )
}

export default Courses
