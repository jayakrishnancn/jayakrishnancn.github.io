import {
  faGithub,
  faGithubAlt,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faFolder } from "@fortawesome/free-regular-svg-icons"
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const project = {
  title: "Project",
  link: "#",
  github: "#",
  content: "Project content",
  tags: ["javascript", "html", "css"],
}
const PROJECTS = [
  {
    title: "Keep Notes",
    link: "https://keep-notes-web.netlify.app",
    github: "https://github.com/jayakrishnancn/keep-notes",
    content:
      "Note keeping app. created using reactjs and firebase. used reCaptch for spam blocking. deployed via netlify and version control using git (github)",
    tags: ["javascript", "html", "css"],
  },
  project,
]

const Projects = () => {
  return (
    <div
      id="projects"
      className="mt-28 grid sm:grid-cols-2 md:grid-cols-3 gap-3 "
    >
      {PROJECTS.map(project => {
        let { title, link, github, content, tags = [] } = project
        return (
          <div
            key={`projects-${title}`}
            className="group p-5 border bg-gray-50 rounded-md text-muted transform hover:shadow-md transition-all hover:-translate-y-2"
          >
            <div className="flex justify-between my-5">
              {title && (
                <FontAwesomeIcon
                  icon={faFolder}
                  size="2x"
                  className="group-hover:text-red-500 max-icon-size"
                />
              )}
              <div>
                {link && (
                  <a href={link}>
                    <FontAwesomeIcon
                      className="ml-3 hover:text-red-500 text-muted"
                      icon={faExternalLinkSquareAlt}
                    />
                  </a>
                )}
                {github && (
                  <a href={github}>
                    <FontAwesomeIcon
                      className="ml-3 hover:text-red-500 text-muted"
                      icon={faGithub}
                    />
                  </a>
                )}
              </div>
            </div>
            <h1 className="text-2xl font-bold text-muted group-hover:text-black">
              {title}
            </h1>
            <p className="felx-1">{content}</p>
            <div className="text-xs">
              {tags.map((tag, index) => (
                <span key={`tag-${tag}`} className="text-muted mr-2">
                  Javascript
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Projects
