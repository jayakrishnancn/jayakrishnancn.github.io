import * as React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"
import Bio from "./bio"

interface LayoutProps {
  children: any
  showBio?: boolean
}

const Layout = ({ children, showBio = false }: LayoutProps) => {
  return (
    <div className="max-w-screen-sm	container">
      <div id="page-top"></div>
      <header className="flex justify-between py-8">
        <Link className="text-primary" to="/">
          Jayakrishnan
        </Link>
        <Link className="text-primary" to="/">
          Articles
        </Link>
      </header>
      <main>{children}</main>

      <p className="text-center text-sm">
        <strong>
          <a href="#page-top">⬆ Back to Top</a>
        </strong>
      </p>

      {showBio && <Bio />}
      <Footer />
    </div>
  )
}

export default Layout
