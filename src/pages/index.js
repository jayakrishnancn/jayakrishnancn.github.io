import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Card from "../components/Card"

const Home = () => {
  return (
    <Layout hideToTop={true}>
      <Card
        footer={
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Link to="/" type="button" className="border-r-0 rounded-l-lg btn">
              Projects
            </Link>
            <Link to="/" type="button" className="border-l-0 rounded-r-lg btn">
              Blog
            </Link>
          </div>
        }
        title="Jayakrishnan C N"
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
        <div>
          <p>
            JavaScript enthusiast and Software Engineer with more than 4 years
            of experience in ReactJs and Java.
          </p>
          <p>
            Hello Sapiens, <br /> Welcome to my blog. Let me introduce myself,I
            am Jayakrishnan. I am from India. Trying consistantly to improve
            myself. I am currently working as a full-stack developer (JavaScript
            & Java). I like TypeScript a lot, you might see more
            JavaScript/TypeScript related posts quiet often here. I try to #tag
            all the posts and I will try to keep the contents up to date and
            releavnt.
            <br />
            <br />
            Thank You
          </p>
        </div>
      </Card>
    </Layout>
  )
}

export default Home
