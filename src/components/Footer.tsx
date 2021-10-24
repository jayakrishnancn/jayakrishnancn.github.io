import React from "react"

interface FooterProps {
  siteUrl?: string | null
}

const Footer = ({ siteUrl }: FooterProps) => {
  return (
    <footer className="text-gray-400 text-xs text-center mt-5">
      © {new Date().getFullYear()},{` `}
      <a href={siteUrl ?? "/"}>Jayakrishnan</a>
    </footer>
  )
}
export default Footer
