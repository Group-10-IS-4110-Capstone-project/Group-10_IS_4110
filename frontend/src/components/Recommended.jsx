import React from 'react'
import '../Styles/Recommended.css'
import Recom1 from '../assets/The best data science book for beginners_.jpeg'
import Recom2 from '../assets/Sports Analytics and Data Science_ Winning the Game With Methods and Models.jpeg'
import Recom3 from '../assets/Think Python, 2nd edition.jpeg'
import Recom4 from '../assets/Want to learn how to code_ Start with these popular books, free.jpeg'
import Recom5 from '../assets/15 Awesome And Free JavaScript Books.jpeg'
import Recom6 from '../assets/9 Books to Start Your Business Analytics Journey.jpeg'

function Recommended() {
  return (
    <div class="categories">
        <h2 class="title">Things recomend by experts</h2>
    <div class="small-container">
        <div class="row">
            <div class="col-3">
              <img src={Recom1} alt='' />
              <div className="white-box">
              <h3>Data Science from Scratch</h3>
              <p>Data Science Specialization and other related courses</p>
              </div>
            </div>
            <div class="col-3">
              <img src={Recom2} alt='' />
              <div className="white-box">
              <h3>Sports Analytics and Data Science</h3>
              <p>Data Science Specialization and other related courses</p>
              </div>
            </div>
            <div class="col-3">
              <img src={Recom3} alt='' /> 
              <div className="white-box">
              <h3>Think Phython</h3>
              <p>Data Science Specialization and other related courses</p>
              </div>
            </div>
        </div>

        <div class="row">
        <div class="col-3">
              <img src={Recom4} alt='' />
              <div className="white-box">
              <h3>ELOQUENT JAVASCRIPT</h3>
              <p>Data Science Specialization and other related courses</p>
              </div>
            </div>
            <div class="col-3">
              <img src={Recom5} alt='' />
              <div className="white-box">
              <h3>Programming JavaScript Applications</h3>
              <p>Data Science Specialization and other related courses</p>
              </div>
            </div>
            <div class="col-3">
              <img src={Recom6} alt='' /> 
              <div className="white-box">
              <h3>Phython for Data Analysis</h3>
              <p>Data Science Specialization and other related courses</p>
              </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Recommended
