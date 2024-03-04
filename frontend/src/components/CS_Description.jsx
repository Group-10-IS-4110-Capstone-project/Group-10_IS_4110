import React from 'react'
import '../Styles/Description.css'
import Data_Science from '../assets/DataScience.jpg'

function CS_Description() {
  return (
    <div className="data-science-container">
      <img src={Data_Science} alt='' className="data-science-image" />
  <p className="data-science-description">
    <b>Cyber Security </b>is a field of technology focused on protecting computer systems, networks, and data from cyber threats such as hacking, malware, and unauthorized access. It encompasses a range of practices, technologies, and processes designed to safeguard digital assets and mitigate risks to information security.
    Similar to cloud computing, cybersecurity involves accessing and utilizing resources, but in this case, the focus is on securing those resources against malicious actors and potential vulnerabilities. Cybersecurity professionals work to identify and assess risks, implement security measures, and respond to security incidents to protect organizations' data and infrastructure.
  </p>
    </div>
  )
}

export default CS_Description
