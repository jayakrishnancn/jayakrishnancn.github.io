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

const Bio = () => {
  return (
    <div className={"mx-auto my-4 mb-10 max-w-sm flex rounded"}>
      <Link to="/portfolio">
        <StaticImage
          className="rounded-full h-auto"
          layout="constrained"
          formats={["auto", "webp", "avif"]}
          src="../images/selfi.jpg"
          width={150}
          height={150}
          quality={95}
          alt="Profile picture"
        />
      </Link>
      <div className="my-auto px-4 py-2 flex-1 ">
        <div>
          <Link to="/portfolio" className="font-bold ml-0">
            Jayakrishnan
          </Link>
        </div>
        <div className="text-muted mt-1">Fullstack developer</div>
        <SocialLinks />
        <Link
          to="/portfolio"
          className="text-right group  text-xs inline-block"
        >
          View portfolio
          <span className="transform transition-all -translate-x-1 absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
            ➞
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Bio
