import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
   
    <div className='error-page d-flex flex-column justify-content-center text-center m-auto' style={{ maxWidth: `400px`, height: "100vh" }}>
      <SEO title="404: Not found" />
      <h1 style={{fontSize: '5rem',color:"#FF5722"}}>404</h1>
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Home</Link> 
    </div>
   
)

export default NotFoundPage
