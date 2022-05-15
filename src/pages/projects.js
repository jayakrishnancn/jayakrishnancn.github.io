import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink"
import timeZoneImage from "../images/time-zones.png"
import { Link } from "gatsby"

const Projects = () => {
  const projects = [
    {
      title: "Time Zones",
      content: `Time Zones is a convenient world clock, a time zone converter, and
      an online meeting scheduler. It's one of the best online
      productivity tools for those often finding themselves traveling,
      in flights, in online meetings or just calling friends and family
      abroad.`,
      image: { src: timeZoneImage, alt: "Timezone icon" },
      links: [
        {
          to: "https://github.com/jayakrishnancn/timezones",
          content: (
            <>
              <AiFillGithub /> &nbsp;Github
            </>
          ),
        },
        {
          to: "https://jayakrishnancn.github.io/timezones",
          content: (
            <>
              <FiExternalLink /> &nbsp;Live Demo
            </>
          ),
        },
      ],
    },
  ]
  return (
    <Layout hideToTop={true}>
      {projects.map(project => {
        const imageSrc = project.image.src
        return (
          <Card
            key={project.title}
            footer={
              <div className="flex justify-end" role="group">
                <div className="inline-flex rounded-md shadow-sm">
                  {project.links.map(({ to, content }, index) => (
                    <a
                      key={to}
                      target="_blank"
                      rel="noreferrer"
                      href={to}
                      type="button"
                      className={
                        "btn " +
                        (index === project.links.length - 1
                          ? "border-l-0 rounded-r-lg"
                          : index === 0
                          ? "border-r-0 rounded-l-lg"
                          : "")
                      }
                    >
                      {content}
                    </a>
                  ))}
                </div>
              </div>
            }
            title={project.title}
            image={
              <img
                key={imageSrc}
                src={imageSrc}
                loading="lazy"
                width={150}
                height={150}
                alt={project.image.alt}
                className="w-50 h-50 p-1"
              />
            }
          >
            <p>{project.content}</p>
          </Card>
        )
      })}
    </Layout>
  )
}

export default Projects
