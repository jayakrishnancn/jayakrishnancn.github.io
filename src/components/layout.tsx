import * as React from "react"
import Footer from "./Footer"

interface LayoutProps {
  children: any
  hideToTop?: boolean
}

const Layout = ({ children, hideToTop = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div id="page-top"></div>
      <div className="bg-blue-600 relative h-64 w-full "></div>
      <main>{children}</main>
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
