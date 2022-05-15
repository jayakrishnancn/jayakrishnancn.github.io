import { Link } from "gatsby"
import * as React from "react"
import Footer from "./Footer"

interface LayoutProps {
  children: any
  hideToTop?: boolean
  narbar?: boolean
  isStacked?: boolean
}

const Layout = ({
  children,
  hideToTop = false,
  narbar = true,
  isStacked = true,
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div id="page-top"></div>
      <div className="bg-blue-600 relative h-64 w-full"></div>
      <main className={isStacked ? "relative -mt-40" : ""}>
        {narbar && (
          <div className="flex justify-end max-content-w mx-auto mb-3">
            <div className="inline-flex  rounded-md shadow-sm" role="group">
              <Link
                to="/"
                type="button"
                className="border-r-0 rounded-l-lg btn"
                activeClassName="selected-nav"
              >
                Home
              </Link>
              <Link
                to="/projects"
                type="button"
                className="border-0 btn"
                activeClassName="selected-nav"
              >
                Projects
              </Link>
              <Link
                to="/"
                type="button"
                className="border-l-0 rounded-r-lg btn"
                activeClassName="selected-nav"
              >
                Blog
              </Link>
            </div>
          </div>
        )}
        {children}
      </main>
      {!hideToTop && (
        <p className="text-center mt-11 text-sm">
          <strong>
            <a href="#page-top">⬆ Back to Top</a>
          </strong>
        </p>
      )}
      <div className="flex-grow"></div>
      <Footer />
    </div>
  )
}

export default Layout
