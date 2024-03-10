import React from 'react';
import '../Styles/Courses.css';
import Page_change_btn from '../components/Page_change_btn';

import udemy from '../assets/Ellipse 35.png';
import great from '../assets/Ellipse 32.png';
import coursera from '../assets/Ellipse 34.png';
import udacity from '../assets/Ellipse 33.png';
import solo from '../assets/Ellipse 36.png';
import add from '../assets/add.png'
import Button_2 from './Button_2';

function Courses_2() {
  return (
    <div className="courses">
      <h2 className="title">Online Courses and Certificates</h2>

      <div className="paren">

      <div className="udemy">
        <div className="overlap-7">
          <img className="ellipse-5" alt="" src={udemy} />
          <div className="overlap-group-2">
            <div className="fixed-width-fixed" />
            <div className="feature-title">Udemy</div>
            <br />
            <hr />
          </div>
          <p className="paragraph-feature">
            Data Science Specialization <br />
            and other related courses.
          </p>
        </div>
      </div>
      <div className="great">
        <div className="overlap-7">
          <div className="overlap-8">
            <img className="ellipse-6" alt="" src={great} />
          </div>
          <div className="overlap-group-3">
            <div className="fixed-width-fixed" />
            <div className="feature-title">Great learning</div>
            <br />
            <hr />
          </div>
          <p className="paragraph-feature-2">
            Data Science Specialization <br />
            and other related courses.
          </p>
        </div>
      </div>
      <div className="coursera">
        <div className="overlap-7">
          <div className="overlap-9">
            <img className="ellipse-8" alt="" src={coursera} />
          </div>
          <div className="overlap-group-4">
            <div className="fixed-width-fixed" />
            <div className="feature-title">Coursera</div>
            <br />
            <hr />
          </div>
          <p className="paragraph-feature-3">
            Data Science Specialization <br />
            and other related courses.
          </p>
        </div>
      </div>

      <div className="udacity">
        <div className="overlap-7">
          <div className="overlap-10">
            <img className="ellipse-10" alt="" src={udacity} />
          </div>
          <div className="overlap-group-5">
            <div className="fixed-width-fixed" />
            <div className="feature-title">Udacity</div>
            <br />
            <hr />
          </div>
          <p className="paragraph-feature-4">
            Data Science Specialization <br />
            and other related courses.
          </p>
        </div>
      </div>
      <div className="solo">
        <div className="overlap-7">
          <img className="ellipse-12" alt="" src={solo} />
          <div className="overlap-group-6">
            <div className="fixed-width-fixed-2" />
            <div className="feature-title">Solo learn</div>
            <br />
            <hr />
          </div>
          <p className="paragraph-feature-5">
            Data Science Specialization <br />
            and other related courses.
          </p>

        </div>

        <div className='c_butn'>
        <Page_change_btn />

        <Button_2 />
        
        </div>

   


      </div>
    </div>
    </div>
  );
}

export default Courses_2;
