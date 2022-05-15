import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { getChaiTime } from "../utils/timeCalc"
import { GatsbyImage } from "gatsby-plugin-image"
import Tag from "../components/Tag"
import Card from "../components/Card"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const {
    frontmatter: {
      tags,
      title,
      description,
      date,
      featuredImage = {},
      featuredImageAlt,
    },
    excerpt,
    timeToRead,
    html,
  } = post || {}

  const { childImageSharp: { gatsbyImageData } = {} } = featuredImage || {}
  return (
    <Layout>
      <Seo title={title} description={description || excerpt} />
      <Card>
        <div>
          <article
            className="post pr-5"
            itemScope
            itemType="http://schema.org/Article"
          >
            {gatsbyImageData && (
              <GatsbyImage
                alt={featuredImageAlt ?? "cover image"}
                className="rounded my-5 max-w-2xl mx-auto "
                image={gatsbyImageData}
              />
            )}
            <header>
              <div id="page-header"></div>
              <h1
                itemProp="headline"
                className="text-3xl my-5 mt-14 font-extrabold text-gray-900"
              >
                {title}
              </h1>
              <p className="text-muted">
                <small>{date}</small>
                <small> &#8226; {getChaiTime(timeToRead)}</small>
              </p>
            </header>
            <div id="page-content"></div>
            <section
              className="text-gray-500 article-body"
              dangerouslySetInnerHTML={{ __html: html }}
              itemProp="articleBody"
            />
            <div id="page-footer"></div>
          </article>
          <div className="py-5">
            <Tag tags={tags} />
          </div>
          <hr />
          <nav className="border-gray-200 py-4 mb-5">
            <div id="page-bottom-nav"></div>
            <ul className="flex justify-between">
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    ← {next.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    {previous.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </Card>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImageAlt
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
