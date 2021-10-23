import React from "react"

const Footer = ({ siteUrl }) => {
  return (
    <footer className="text-gray-400 text-xs text-center mt-5">
      © {new Date().getFullYear()},{` `}
      <a href={siteUrl ?? "/"}>Jayakrishnan</a>
    </footer>
  )
}
export default Footer
