import * as React from "react"
import { Link } from "gatsby"
import { getTagPath, getTagString } from "../utils/tagUrils"
import { FaWindowClose } from "@react-icons/all-files/fa/FaWindowClose"
interface TagProps {
  tags: any[]
  activeTag?: string
}

const Tag = ({ tags = [], activeTag }: TagProps) => {
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
              ? "flex items-center active-tag hover:active-tag"
              : "flex items-center inactive-tag hover:active-tag"
          }
          to={activeTag && tag === activeTag ? "/blog" : getTagPath(tag)}
        >
          {activeTag && tag === activeTag && <FaWindowClose />}
          <span> &nbsp;{getTagString(tag)}</span>
        </Link>
      ))}
    </div>
  )
}
export default Tag
