import React, { useState } from 'react'
import '../Styles/Navbar_2.css'
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
  

    </div>
    
  )
}

export default Navbar_2
