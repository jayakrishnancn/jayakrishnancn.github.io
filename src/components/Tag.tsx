import * as React from "react"
import { Link } from "gatsby"
import { getTagPath, getTagString } from "../utils/tagUrils"

interface TagProps {
  tags: any[]
  activeTag?: string
  clearTag?: boolean
}

const Tag = ({ tags = [], activeTag, clearTag = false }: TagProps) => {
  if (!tags || tags.length === 0) {
    return null
  }
  return (
    <div className="flex justify-end items-start flex-wrap">
      {tags.map(tag => (
        <Link
          key={"search-tag-" + tag}
          className={
            activeTag && tag === activeTag
              ? "active-tag hover:active-tag"
              : "inactive-tag hover:active-tag"
          }
          to={clearTag ? "/" : getTagPath(tag)}
        >
          {getTagString(tag)}
          {clearTag && " ✖"}
        </Link>
      ))}
    </div>
  )
}
export default Tag
