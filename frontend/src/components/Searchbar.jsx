import React from 'react'
import { FaSearch } from 'react-icons/fa'
import '../Styles/Searchbar.css'

function Searchbar() {
  return (
    <div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-bar" />
        <button className="search-icon"><FaSearch /></button>
      </div>
    </div>
  )
}

export default Searchbar
