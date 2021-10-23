import * as React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"

const Layout = ({ title, children, siteUrl }) => {
  return (
    <div className="max-w-screen-sm	container">
      {title && (
        <header>
          <Link
            className="font-semibold text-xl block pt-2 pb-4 text-primary"
            to="/"
          >
            {title}
          </Link>
        </header>
      )}
      <main>{children}</main>
      <Footer siteUrl={siteUrl} />
    </div>
  )
}

export default Layout
