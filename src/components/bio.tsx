/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

type SummaryProps = {
  author: {
    title: string
    summary: string
  }
}

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author: any = data.site.siteMetadata?.author
  return (
    <div className="bio">
      <Link to="/portfolio">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/selfi.jpg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      </Link>{" "}
      Personal blog by{" "}
      <Link to="/portfolio" className="pl-5">
        Jayakrishnan
      </Link>
    </div>
  )
}

export default Bio
