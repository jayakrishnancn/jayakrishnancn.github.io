import React from "react"
import { Link } from "gatsby"

const Pagination = ({ pageContext }) => {
  const { numPages, currentPage, limit, skip } = pageContext
  const isFirst = currentPage <= 1
  const isLast = currentPage >= numPages
  const prevPage = currentPage <= 2 ? "/" : "/" + (currentPage - 1)
  const nextPage =
    "/" + (currentPage + 1 > numPages ? numPages : (currentPage + 1).toString())
  return (
    <div className="text-center">
      <div className="flex-1 flex justify-between sm:hidden">
        {!isFirst && (
          <Link
            to={prevPage}
            rel="prev"
            className="pagination-item rounded-l-md"
          >
            Previous
          </Link>
        )}
        {!isLast && (
          <Link
            to={nextPage}
            rel="next"
            className="pagination-item rounded-r-md"
          >
            Next
          </Link>
        )}
      </div>

      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          {!isFirst && (
            <Link to={prevPage} className="pagination-item rounded-l-md">
              <span>Previous</span>
            </Link>
          )}

          {Array.from({ length: numPages }, (_, i) => (
            <Link
              key={`pagination-item-${i}`}
              aria-current="page"
              className={
                "pagination-item" +
                (isFirst && i == 0 ? " rounded-l-md" : "") +
                (currentPage === i + 1 ? " pagination-active" : "")
              }
              to={`/${i === 0 ? "" : i + 1}`}
            >
              {i + 1}
            </Link>
          ))}
          {!isLast && (
            <Link to={nextPage} className="pagination-item rounded-r-md">
              <span>Next</span>
            </Link>
          )}
        </nav>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Pagination
