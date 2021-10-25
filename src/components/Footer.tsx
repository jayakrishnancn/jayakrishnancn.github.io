import { Link } from "gatsby"
import React from "react"

interface FooterProps {
  siteUrl?: string | null
}

const Footer = ({ siteUrl }: FooterProps) => {
  return (
    <footer className="text-gray-400 text-xs text-center mt-5">
      © {new Date().getFullYear()},{` `}
      <Link to={siteUrl ?? "/"}>Jayakrishnan</Link>
    </footer>
  )
}
export default Footer
