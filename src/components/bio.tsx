/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SocialLinks from "./SocialLinks"

interface BioClasses {
  wrapper?: any
  image?: any
}
interface BioProps {
  location?: string
  classes?: BioClasses
}

const Bio = ({ location }: BioProps) => {
  return (
    <div className={" shadow-md mx-auto my-4 max-w-sm flex rounded"}>
      <Link to="/portfolio">
        <StaticImage
          className="rounded-l-md h-auto"
          layout="constrained"
          formats={["auto", "webp", "avif"]}
          src="../images/selfi.jpg"
          width={130}
          height={148}
          quality={95}
          alt="Profile picture"
        />
      </Link>
      <div className="my-auto p-4">
        <div>
          <Link to="/portfolio" className="font-bold ml-0">
            Jayakrishnan
          </Link>
        </div>
        <div className="text-muted mt-5">Fullstack developer</div>
        <SocialLinks />
      </div>
    </div>
  )
}

export default Bio
