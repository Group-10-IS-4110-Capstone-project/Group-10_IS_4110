import React from 'react'
import '../Styles/Courses.css'
import img1 from '../assets/Ellipse 33.png'
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
                <img src={img1} alt='' />
                <h3>Great learning</h3>
    				<p><b>Data Science </b>Specialization and other related courses.</p>
    			</div>
    			<div class="col-3">
                <img src={img1} alt='' />
                <h3>Great learning</h3>
    				<p><b>Data Science </b>Specialization and other related courses.</p>
    			</div>
    		</div>
            <div className="row">
            <div class="col-3">
                <img src={img1} alt='' />
                <h3>Great learning</h3>
    				<p><b>Data Science </b>Specialization and other related courses.</p>
    			</div>
    			<div class="col-3">
                <img src={img1} alt='' />
                <h3>Great learning</h3>
    				<p><b>Data Science </b>Specialization and other related courses.</p>
    			</div>
            </div>
    	</div>
        <Page_change_btn />
    </div>

  )
}

export default Courses
