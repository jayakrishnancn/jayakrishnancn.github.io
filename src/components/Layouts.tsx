import { Link } from "gatsby"
import * as React from "react"
import Footer from "./Footer"
import { GrLinkTop } from "@react-icons/all-files/gr/GrLinkTop"
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
      <main className={isStacked ? "relative -mt-52" : ""}>
        {narbar && (
          <div className="flex justify-end max-content-w mx-auto mb-3">
            <div className="btn-grp" role="group">
              <Link
                to="/"
                type="button"
                className="btn"
                activeClassName="selected-nav"
              >
                About
              </Link>
              <Link
                to="/projects"
                type="button"
                className="btn"
                activeClassName="selected-nav"
              >
                Projects
              </Link>
              <Link
                to="/blog"
                type="button"
                className="btn"
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
            <a href="#page-top">
              <div className="flex items-center justify-center">
                <GrLinkTop /> <span className="pl-3">Back to Top</span>
              </div>
            </a>
          </strong>
        </p>
      )}
      <div className="flex-grow"></div>
      <Footer />
    </div>
  )
}

export default Layout
