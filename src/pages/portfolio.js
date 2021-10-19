import * as React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Seo from "../components/seo"
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { StaticImage } from "gatsby-plugin-image"
const SOCIALLINKS = [
  { link: "https://www.linkedin.com/in/jayakrishnancn/", icon: faLinkedinIn },
  { link: "https://github.com/jayakrishnancn", icon: faGithub },
  { link: "https://codepen.io/jayakrishnancn/", icon: faCodepen },
  { link: "https://www.instagram.com/jayakrishnancn/", icon: faInstagram },
]
const Portfolio = ({ data }) => {
  const { title, siteUrl } = data.site.siteMetadata

  return (
    <div className="global-wrapper portfolio">
      <header className="global-header">
        <StaticImage
          alt="profilepic"
          src="../images/selfi.jpg"
          width={150}
          height={150}
          className="bio-avatar"
        />
        <h1 className="m-1">Jayakrishnan</h1>
        <p>Full Stack Developer</p>
      </header>
      <main>
        <Seo title="Portfolio" />
        <Link to="/" className="btn">
          Checkout my blog
        </Link>

        <a
          href="Resume-Jayakrishnan[FullStack-4Y]18_OCT_2021.pdf"
          className="btn"
          download
        >
          Resume
        </a>
        <ul className="social-links">
          {SOCIALLINKS.map(item => (
            <li>
              <a href={item.link} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </main>
      <footer className="common-footer">
        © {new Date().getFullYear()},{` `}
        {title && <a href={siteUrl ?? "#"}>{title}</a>}
      </footer>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`

export default Portfolio
