import React from 'react'
import '../Styles/SearchbarResults.css'
import SearchResults from './SearchResults'

const SearchbarResults = ({results}) => {
  return (
    <div className='results-list'>
      {
        results.map((result, id) => {
            return <SearchResults result={result} key={id}/>
        })
      }
    </div>
  )
}

export default SearchbarResults
