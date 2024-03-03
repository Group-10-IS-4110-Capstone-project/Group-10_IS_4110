import React, { useState } from 'react'
import '../Styles/Navbar_2.css'
import Data_Science from '../assets/DataScience.jpg'
import Searchbar from '../components/Searchbar'
import SearchbarResults from './SearchbarResults';


function Navbar_2() {

  const [results, setResults] = useState([]);

  return (
    <div>
    <div className='navbar'>
      <div className=''>
      <button className="primary-button">HOME</button>
      <button className="primary-button">ABOUT</button>
      <button className="primary-button">EXPERTS</button>
      <button className="primary-button">CONTACT US</button>  
      </div>
    </div>
    <div className='Search'>
      <div className="search-bar-container">
        <Searchbar setResults={setResults} />
        <SearchbarResults results={results} />
      </div>
  </div>
    <div className="data-science-container">
  <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Data science </b>continues to evolve as one of the most promising and in-demand career paths for skilled professionals. Today, successful data professionals understand that they must advance past the traditional skills of analyzing large amounts of data, data mining, and programming skills. In order to uncover useful intelligence for their organizations, data scientists must master the full spectrum of the data science life cycle and possess a level of flexibility and understanding to maximize returns at each phase of the process.
  </p>
</div>

    </div>
    
  )
}

export default Navbar_2
