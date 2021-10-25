import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SOCIALLINKS from "../configs/socialLinks"

interface SocialLinksProps {
  size?: any
}

const SocialLinks = ({ size }: SocialLinksProps) => {
  return (
    <ul className="flex mt-1">
      {SOCIALLINKS &&
        SOCIALLINKS.map(({ link, ...rest }) => (
          <li key={link}>
            <a
              href={link}
              className="p-2 mr-2 hover:shadow rounded text-gray-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon {...rest} size={size ?? rest?.size ?? "1x"} />
            </a>
          </li>
        ))}
    </ul>
  )
}

export default SocialLinks
