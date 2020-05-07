import React from "react"
import profilePic from '../images/profile_pic.png'
import SEO from "../components/seo"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => (

  <div className='homepage d-flex flex-column justify-content-center text-center m-auto' style={{ maxWidth: `300px`, height: "100vh" }}>
    <SEO title="Home" />
    <div>
      <img src={profilePic} className="profilePic" loading="lazy" decoding="async" alt="Proile pic" />
      <h1>Jayakrishnan</h1>
      <p>Systems Engineer</p>
      <p>Full stack developer</p>
      <div className="sitenav">
        <Link to="/blog">Blog</Link> <br />
        <Link to="/projects">Projects</Link><br />
        <Link to="/about">About Me</Link>
      </div>
      <div className="social-links">
        <a href="https://github.com/jayakrishnancn/" className='img' target="_blank" rel="noopener noreferrer">

          <FontAwesomeIcon className="theme-icon" icon={faGithub} />

        </a>
        <a href="https://stackoverflow.com/users/4004879/jayakrishnan"
          className='img'
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon className="theme-icon" icon={faStackOverflow} />
        </a>
        <a href="https://www.linkedin.com/in/jayakrishnancn/"
          className='img'
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon className="theme-icon" icon={faLinkedin} />
        </a>
        <a href="https://codepen.io/jayakrishnancn/"
          className='img'
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon className="theme-icon" icon={faCodepen} />
        </a>
      </div>
    </div>
  </div>

)

export default IndexPage
