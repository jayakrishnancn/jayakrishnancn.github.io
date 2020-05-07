import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const About = () => (
   
    <div className='article about-page pt-5'>
      <SEO title="About Me" />
      <h1>Jayakrishnan</h1>
      <h1>Experiance</h1>
      <p>* TCS 2 years</p>
      <Link to="/">Home</Link> 
    </div>
   
)

export default About
