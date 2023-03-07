import React from 'react'
import './GetInTouch.scope.css'

function Contact() {
  return (
    <div className='container absolute'>
        <p>Get In Touch</p>
        <p>Say hi or something...
        email & comment - submit
        Social Media :</p>
        <div className="social-media">
          <a href='https://www.linkedin.com/in/firyal-y-salsabila/' target="_blank" rel="noreferrer">
            <img src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1673533107/tech%20stack/linkedin-icon_wdovzg.svg' alt="linkedin"/>
          </a>
          <a href='https://github.com/firyal-salsa' target="_blank" rel="noreferrer">
            <img src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1673533111/tech%20stack/github-icon_wq69a4.svg' alt="github"/>
          </a>
          <a href='https://medium.com/@firsabilacahyadi' target="_blank" rel="noreferrer">
            <img src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1673533090/tech%20stack/medium-icon_jqp5fd.svg' alt="medium"/>
          </a>
        </div>
        
    </div>
  )
}

export default Contact

