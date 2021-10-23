import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SOCIALLINKS from "../configs/socialLinks"

const SocialLinks = () => {
  return (
    <ul className="flex mt-1">
      {SOCIALLINKS &&
        SOCIALLINKS.map(({ link, ...rest }) => (
          <li key={link}>
            <a
              href={link}
              className="p-2 mr-2 hover:shadow rounded"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon {...rest} size={rest?.size ?? "1x"} />
            </a>
          </li>
        ))}
    </ul>
  )
}

export default SocialLinks
