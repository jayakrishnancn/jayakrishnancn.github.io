import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <footer className="text-gray-400 text-xs text-center mt-5">
      © {new Date().getFullYear()},{` `}
      <Link to="/">Jayakrishnan</Link>
    </footer>
  )
}
export default Footer
