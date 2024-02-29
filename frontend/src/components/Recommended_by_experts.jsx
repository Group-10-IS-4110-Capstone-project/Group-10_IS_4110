import React from 'react'
import '../Styles/Recommended_by_experts.css'
import stat from '../assets/517TrzchOML._AC_UF1000,1000_QL80_.jpg'


function Recommended_by_experts() {
  return (
    <div className='overlap-4'>
        <div className='things'>Things recomend by experts</div>
        <div className="elements-of">
            <div className='product-card'>
                <div className='frame'>
                    <div className='product-title'><b>The Elements of 
            Statistical Learning</b><br /><br />
          
              Trevor Hastie, Robert Tibshirani, 
              and Jerome </div>
                </div>
            </div>
            <img src={stat} alt='' className="rectangle-12"/>
        </div>
        <div className="journal">
            <div className="group" />
            <div className="frame-wrapper">
                <div className="frame">
                <div className="product-title"><b>Towards Data Science</b> <br/><br/>
          
          An online publication with a vast collection 
            of data science articles and tutorials.
            </div>
                </div>
            </div>
        </div>
        <div className="python-for">
        <div className="group-3" />
        <div className="product-card-2">
          <div className="frame">
            <div className="product-title"><b>Python for Data Analysis</b><br /><br />
           
             
              This is by Wes McKinney: <br/>
              A practical 
              guide to data analysis
              </div>
          </div>
        </div>
      </div>
      <div className="pattern">
        <div className="group-4" />
        <div className="product-card-3">
          <div className="frame">
            <div className="product-title"><b>Pattern analysis</b><br /><br />
           
            Journals like 
             IEEE Transactions on Pattern Analysis 
              and Machine Intelligence 
              </div>
          </div>
        </div>
      </div>
      <div className="overlap-5">
      <div className="add" />

    </div>
    </div>
  )
}

export default Recommended_by_experts
