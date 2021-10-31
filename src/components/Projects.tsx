import {
  faGithub,
  faGithubAlt,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faFolder } from "@fortawesome/free-regular-svg-icons"
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const PROJECTS = [
  {
    title: "Keep Notes",
    year: 2021,
    link: "https://keep-notes-web.netlify.app",
    github: "https://github.com/jayakrishnancn/keep-notes",
    content:
      "Note keeping app. created using reactjs and firebase. used reCaptch for spam blocking. deployed via netlify and version control using git (github)",
    tags: [
      "React",
      "Typescript ",
      "Firebase",
      "Git",
      "reCaptcha",
      "netlify",
      "Github",
    ],
  },
  {
    title: "Concept Group of Companies",
    year: 2017,
    link: "http://www.conceptgroupofcompanies.com/",
    content:
      "Design, Develop and deploy custom wordpress application for Concept group of companies, a leading business group based in Trivandrum, Kerala",
    tags: ["Wordpress", "JQuery", "Gulp", "Bootstrap", "SASS"],
  },
  {
    title: "Achayans Homestay",
    year: 2015,
    link: "http://www.achayanshomestay.com/",
    content:
      "Homestay website for Achayans homestay. Design and Develop responsive website for Homestay based on Alappuzha (Kerala).",
    tags: ["JQuery", "Gulp", "Bootstrap", "SASS"],
  },
  {
    title: "College Campus Portal",
    year: 2016,
    link: "http://sctceonline.in/btech/",
    content: `College campus portal for Sree Chitra Thirunal College of Engineering. 
    Developed using PHP and MySQL. Features includes authentication, timetable entry, report generation,
    assignment, progress report for students and other major department level activities. `,
    tags: [
      "PHP",
      "Codeigniter",
      "MySQL",
      "JQuery",
      "Gulp",
      "Bootstrap",
      "SASS",
    ],
  },
]

const Projects = () => {
  return (
    <div
      id="projects"
      className="mt-28 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-justify"
    >
      {PROJECTS.sort((a, b) => b.year - a.year).map(project => {
        let { title, year, link, github, content, tags = [] } = project
        return (
          <div
            key={`projects-${title}`}
            className="flex flex-col justify-between group p-5 border  text-muted hover:border-red-400 bg-gray-50 rounded-md transform hover:shadow-md transition-all hover:-translate-y-2"
          >
            <div className="flex justify-between my-5">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faFolder}
                  size="2x"
                  className="group-hover:text-red-500 max-icon-size-2x"
                />
                {year && <span className="ml-4">{year}</span>}
              </div>
              <div>
                {link && (
                  <a href={link} target="_blank">
                    <FontAwesomeIcon
                      className="mx-3 hover:text-red-500 group-hover:text-gray-500 text-muted max-icon-size-2x"
                      icon={faExternalLinkSquareAlt}
                    />
                  </a>
                )}
                {github && (
                  <a href={github} target="_blank">
                    <FontAwesomeIcon
                      className="mx-2 hover:text-red-500 group-hover:text-gray-500 text-muted max-icon-size-2x"
                      icon={faGithub}
                    />
                  </a>
                )}
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-muted group-hover:text-black">
                {title}
              </h1>
              <p className="felx-1 text-muted group-hover:text-gray-500">
                {content}
              </p>
            </div>
            <div className="text-xs flex-1 flex items-end flex-wrap">
              <div>
                {tags.map(tag => (
                  <span
                    key={`tag-${tag}`}
                    className="text-muted group-hover:text-gray-500 inline-block mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Projects
