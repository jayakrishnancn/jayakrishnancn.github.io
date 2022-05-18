import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Card from "../components/Card"
import { SiLeetcode } from "@react-icons/all-files/si/SiLeetcode"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { FaBlog } from "@react-icons/all-files/fa/FaBlog"
import { MdPlaylistAddCheck } from "@react-icons/all-files/md/MdPlaylistAddCheck"

const Home = () => {
  return (
    <Layout hideToTop={true}>
      <Card
        footer={
          <div className="text-center mt-5">
            <div className="btn-grp" role="group">
              <Link
                to="/projects"
                type="button"
                className="border-r-0 rounded-l-lg btn"
              >
                <MdPlaylistAddCheck />
                &nbsp;Projects
              </Link>
              <Link
                to="/blog"
                type="button"
                className="border-l-0 rounded-r-lg btn"
              >
                <FaBlog />
                &nbsp;Blog
              </Link>

              <a
                href="https://github.com/jayakrishnancn"
                target="_blank"
                rel="noreferrer"
                type="button"
                className="border-l-0 rounded-r-lg btn"
              >
                <AiFillGithub />
                &nbsp;GitHub
              </a>
              <a
                href="https://leetcode.com/jayakrishnancn/  "
                target="_blank"
                rel="noreferrer"
                type="button"
                className="border-l-0 rounded-r-lg btn"
              >
                <SiLeetcode />
                &nbsp;Leetcode
              </a>
            </div>
          </div>
        }
        heading="Jayakrishnan C N"
        image={
          <StaticImage
            src="../images/selfi.jpg"
            width={150}
            height={150}
            alt="profile pic"
            className="w-50 h-50 p-1 rounded-full ring-4 ring-gray-200 dark:ring-gray-500 "
          />
        }
      >
        <div className="pt-6">
          <p>
            Hello,
            <br />I am Jayakrishnan, Welcome to my blog.
            <br /> I am currently working as a full-stack developer (ReactJS &
            Java). I like TypeScript a lot. You will see posts realted to
            JavaScript/TypeScript here. checkout my projects and blog posts.
            Thanks.
          </p>
        </div>
      </Card>
    </Layout>
  )
}

export default Home
