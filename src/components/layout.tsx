import * as React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"

interface LayoutProps {
  children: any
  siteUrl?: string
}

const Layout = ({ children, siteUrl }: LayoutProps) => {
  return (
    <div className="max-w-screen-sm	container">
      <header>
        <Link
          className="font-semibold text-2xl block pt-2 pb-4 text-primary"
          to="/"
        >
          Jayakrishnan
        </Link>
      </header>
      <main>{children}</main>
      <Footer siteUrl={siteUrl} />
    </div>
  )
}

export default Layout
