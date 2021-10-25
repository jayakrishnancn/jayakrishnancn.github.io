import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const NotFoundPage = ({ data }) => {
  return (
    <div className="container max-w-lg fixed h-2/4 m-auto inset-0">
      <Seo title="Page Not Found" />
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-4">
        Sorry 😔—we couldn’t find what you were looking for.
      </p>
      <Link to="/" className="text-2xl">
        Home
      </Link>
    </div>
  )
}

export default NotFoundPage
