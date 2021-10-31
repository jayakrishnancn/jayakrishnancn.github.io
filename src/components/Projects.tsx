import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaRegFolder } from "@react-icons/all-files/fa/FaRegFolder"
import React from "react"
import Tags from "./tagsMap"

const PROJECTS = [
  {
    title: "Keep Notes",
    year: 2021,
    link: "https://keep-notes-web.netlify.app",
    github: "https://github.com/jayakrishnancn/keep-notes",
    content:
      "Note keeping app. created using reactjs and firebase. used reCaptch for spam blocking. deployed via netlify and version control using git (github)",
    tags: [
      Tags.React,
      Tags.Firebase,
      Tags.Typescript,
      Tags.netlify,
      Tags.Github,
      Tags.reCaptcha,
    ],
  },
  {
    title: "EzFood",
    year: 2020,
    github: "https://github.com/jayakrishnancn/EzFood",
    content:
      "Food ordering system based on Python Django, with stripe API integration",
    tags: [Tags.Javascript, Tags.Python, Tags.Django, Tags.Github, Tags.Stripe],
  },
  {
    title: "Concept Group of Companies",
    year: 2017,
    link: "http://www.conceptgroupofcompanies.com/",
    content:
      "Design, Develop and deploy custom wordpress application for Concept group of companies, a leading business group based in Trivandrum, Kerala",
    tags: [
      Tags.Javascript,
      Tags.Wordpress,
      Tags.JQuery,
      Tags.Gulp,
      Tags.Bootstrap,
      Tags.Sass,
    ],
  },
  {
    title: "Achayans Homestay",
    year: 2015,
    link: "http://www.achayanshomestay.com/",
    content:
      "Homestay website for Achayans homestay. Design and Develop responsive website for Homestay based on Alappuzha (Kerala).",
    tags: [Tags.Javascript, Tags.JQuery, Tags.Gulp, Tags.Bootstrap, Tags.Sass],
  },
  {
    title: "College Campus Portal",
    year: 2016,
    link: "http://sctceonline.in/btech/",
    content: `College campus portal for Sree Chitra Thirunal College of Engineering. 
    Developed using PHP and MySQL. Features includes authentication, timetable entry, report generation,
    assignment, progress report for students and other major department level activities. `,
    tags: [
      Tags.Javascript,
      Tags.PHP,
      Tags.Codeigniter,
      Tags.MySQL,
      Tags.JQuery,
      Tags.Gulp,
      Tags.Bootstrap,
      Tags.Sass,
    ],
  },
]

const Projects = () => {
  return (
    <div
      id="projects"
      className="mt-28 mb-10 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-justify"
    >
      {PROJECTS.sort((a, b) => b.year - a.year).map(project => {
        let { title, year, link, github, content, tags = [] } = project
        return (
          <div
            key={`projects-${title}`}
            className="flex flex-col mt-3 justify-between group p-5 border text-muted hover:border-red-400 bg-gray-50 rounded-md transform shadow-sm hover:shadow-md transition-all hover:-translate-y-2"
          >
            <div className="flex justify-between my-5">
              <div className="flex items-center">
                <FaRegFolder size="2em" className="group-hover:text-red-500" />
                {year && <span className="ml-4">{year}</span>}
              </div>
              <div>
                {link && (
                  <a href={link} target="_blank">
                    <FaExternalLinkAlt
                      size="1em"
                      className="mx-3 hover:text-red-500 text-muted"
                    />
                  </a>
                )}
                {github && (
                  <a href={github} target="_blank">
                    <FaGithub
                      className="mx-2 hover:text-red-500  text-muted"
                      size="1em"
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
            <div className="text-xs flex items-end justify-around flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={`tag-${index}`}
                  className="text-muted group-hover:text-gray-500 inline-block mx-1 leading-6"
                >
                  {tag}
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
