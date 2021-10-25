import React from "react"

const ArrowSlide = props => {
  return (
    <div className="group relative">
      {props?.children}
      <span className="transform w-1 transition-all -translate-x-1 opacity-0 absolute opacity-1 group-hover:opacity-100 group-hover:translate-x-1">
        ➞
      </span>
    </div>
  )
}

export default ArrowSlide
