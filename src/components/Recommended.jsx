import React from 'react'
import '../Styles/Recommended.css'
import Recom from '../assets/517TrzchOML._AC_UF1000,1000_QL80_.jpg'

function Recommended() {
  return (
    <div class="categories">
        <h2 class="title">Things recomend by experts</h2>
    <div class="small-container">
        <div class="row">
            <div class="col-3">
              <img src={Recom} alt='' />
            </div>
            <div class="col-3">
              <img src={Recom} alt='' />
            </div>
            <div class="col-3">
              <img src={Recom} alt='' /> 
            </div>
        </div>

        <div class="row">
        <div class="col-3">
              <img src={Recom} alt='' />
            </div>
            <div class="col-3">
              <img src={Recom} alt='' />
            </div>
            <div class="col-3">
              <img src={Recom} alt='' /> 
            </div>
        </div>
    </div>
</div>
  )
}

export default Recommended
