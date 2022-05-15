import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink"
import timeZoneImage from "../images/time-zones.png"
import keepIcon from "../images/note.png"
import clgIcon from "../images/clg.png"
import homeIcon from "../images/home.png"
import travelIcon from "../images/travel.png"
import proxyIcon from "../images/proxy.png"
import ezFood from "../images/food2.png"

const Projects = () => {
  const projects = [
    {
      title: "Time Zones (2022)",
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
              <AiFillGithub /> &nbsp;GitHub
            </>
          ),
        },
        {
          to: "https://jayakrishnancn.GitHub.io/timezones",
          content: (
            <>
              <FiExternalLink /> &nbsp;Live
            </>
          ),
        },
      ],
    },
    {
      title: "Proxy Cache API (2022)",
      content: `NodeJS  application which acts like a proxy server and caches the responses from the server. Useful in the early development phase of projects where servers are not stable or have frequent downtime.`,
      image: { src: proxyIcon, alt: "Proxy Cache API icon" },
      links: [
        {
          to: "https://github.com/jayakrishnancn/proxy-cache-api",
          content: (
            <>
              <AiFillGithub /> &nbsp;GitHub
            </>
          ),
        },
      ],
    },
    {
      title: "Keep Notes (2021)",
      content: `Note keeping app. created using reactjs and firebase. used reCaptch for spam blocking. deployed via netlify and version control using git (GitHub)`,
      image: { src: keepIcon, alt: "Keep Notes icon" },
      links: [
        {
          to: "https://github.com/jayakrishnancn/keep-notes",
          content: (
            <>
              <AiFillGithub /> &nbsp;GitHub
            </>
          ),
        },
        {
          to: "https://keep-notes-web.netlify.app/",
          content: (
            <>
              <FiExternalLink /> &nbsp;Live
            </>
          ),
        },
      ],
    },
    {
      title: "EzFood (2020)",
      content: `Online food ordering and delivery platform using Python Django and stripe API integration.`,
      image: { src: ezFood, alt: "EzFood icon" },
      links: [
        {
          to: "https://github.com/jayakrishnancn/EzFood",
          content: (
            <>
              <AiFillGithub /> &nbsp;GitHub
            </>
          ),
        },
      ],
    },
    {
      title: "College Campus Portal (2016)",
      content: `College campus portal for Sree Chitra Thirunal College of Engineering. Developed using PHP and MySQL. Features includes authentication, timetable entry, report generation, assignment, progress report for students and other major department level activities.`,
      image: { src: clgIcon, alt: "Keep Notes icon" },
      links: [
        {
          to: "https://github.com/jayakrishnancn/College-Management-System",
          content: (
            <>
              <AiFillGithub /> &nbsp;GitHub
            </>
          ),
        },
      ],
    },
    {
      title: "Kolombus Connect (2017)",
      content: `Redesigned UI of B2B travel agency/ticket booking company based in Kerala.  `,
      image: { src: travelIcon, alt: "Kolombus Connect" },
      links: [
        {
          to: "https://web.archive.org/web/20170605232314/http://www.kolombus.travel/bbl.aspx",
          content: (
            <>
              <FiExternalLink /> &nbsp;Archive
            </>
          ),
        },
      ],
    },
    {
      title: "Achayans Homestay (2015)",
      content: `Homestay website for Achayans homestay. Design and Develop responsive website for Homestay based on Alappuzha (Kerala).`,
      image: { src: homeIcon, alt: "Achayans homestay icon" },
      links: [
        {
          to: "https://www.achayanshomestay.com/",
          content: (
            <>
              <FiExternalLink /> &nbsp;Live
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
            link={
              project.links && project.links.length > 0
                ? project.links[project.links.length - 1].to
                : null
            }
            key={project.title}
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
            <div className="flex-1 flex flex-col">
              <p className="text-gray-600 flex-1">{project.content}</p>
              <div className="flex justify-end" role="group">
                <div className="btn-grp">
                  {project.links.map(({ to, content }) => (
                    <a
                      key={to}
                      target="_blank"
                      rel="noreferrer"
                      href={to}
                      type="button"
                      className="btn"
                    >
                      {content}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )
      })}
    </Layout>
  )
}

export default Projects
