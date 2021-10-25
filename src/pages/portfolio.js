import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/Footer"
import Seo from "../components/seo"
import { Link } from "gatsby"
import SocialLinks from "../components/SocialLinks"

const Portfolio = ({ data }) => {
  return (
    <div className="container">
      <Seo title="Portfolio" />
      <main className="flex flex-col items-center">
        <StaticImage
          src="../images/selfi.jpg"
          width={150}
          height={150}
          className="rounded-full mb-4 mt-10"
        />
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold font-sans-serif">
          Jayakrishnan C N
        </h1>
        <p className="text-gray-500 mt-5">Fullstack Developer</p>
        <div>
          <a
            download
            href="/Resume-Jayakrishnan[FullStack-4Y]18_OCT_2021.pdf"
            target="_blank"
            className="btn-secondary"
          >
            Resume
          </a>
          <Link to="/" className="btn-primary">
            Checkout my blog
          </Link>
        </div>
        <div className="mt-4">
          <SocialLinks size="2x" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio
