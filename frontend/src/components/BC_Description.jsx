import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function BC_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Blockchain </b>is a distributed ledger technology that facilitates secure, transparent, and immutable recording of transactions across a network of computers. It operates as a decentralized database, continually growing a list of records known as blocks, which are linked together in a chain. Each block contains a timestamp, a cryptographic hash of the previous block, and transaction data. Blockchain technology ensures that transactions are transparent, verifiable, and tamper-proof, as once recorded, they cannot be altered or deleted. This decentralized architecture eliminates the need for a central authority, reducing the risk of censorship, fraud, and single points of failure. Blockchain has various applications across industries, including cryptocurrencies, supply chain management, financial services, identity management, and healthcare. It offers trust, transparency, and security in transactions, enabling new forms of digital assets and decentralized applications.
  </p>
    </div>
  )
}

export default BC_Description

