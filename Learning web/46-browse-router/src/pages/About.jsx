import React from 'react'
import Home from './Home'

function About({heading, link, buttonText}) {
  return (
    <div>
        <Home heading={heading} link={link} buttonText={buttonText} />
    </div>
  )
}

export default About