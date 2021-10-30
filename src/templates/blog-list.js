import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getChaiTime } from "../utils/timeCalc"
import { GatsbyImage } from "gatsby-plugin-image"
import Pagination from "../components/Pagination"
import Tag from "../components/Tag"
import ArrowSlide from "../components/ArrowSlide"

const BlogIndex = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes || []
  const { tag: activeTag } = pageContext || {}

  return (
    <Layout>
      <>
        <Seo title={activeTag ?? "Blog"} />
        <Bio />
        {activeTag && (
          <Tag activeTag={activeTag} clearTag={true} tags={[activeTag]} />
        )}
        {posts.length > 0 ? (
          posts.map(post => {
            let {
              frontmatter: {
                date,
                tags,
                title,
                description,
                featuredImageAlt,
                featuredImage,
              } = {},
              fields: { slug = "" } = {},
              timeToRead,
              excerpt,
            } = post || {}
            const { childImageSharp: { gatsbyImageData } = {} } =
              featuredImage || {}

            title = title || slug?.replace(/-/g, " ")?.replace(/\//g, "")

            return (
              <article
                key={slug}
                className="flex shadow-md rounded-md mb-5"
                itemScope
                itemType="http://schema.org/Article"
              >
                {gatsbyImageData && (
                  <GatsbyImage
                    alt={featuredImageAlt || title}
                    className="rounded-l-md h-auto hidden sm:block"
                    image={gatsbyImageData}
                  />
                )}
                <div className="p-5  md:text-left space-y-4">
                  <header>
                    <h1
                      itemProp="headline"
                      className="text-2xl text-primary font-semibold"
                    >
                      <Link to={slug}>{title}</Link>
                    </h1>
                    <p className="text-muted mb-2">
                      <small>{date}</small>
                      <small> &#8226; {getChaiTime(timeToRead)}</small>
                    </p>
                  </header>
                  <section>
                    <p
                      className="text-gray-600 p-0 m-0"
                      dangerouslySetInnerHTML={{
                        __html: description || excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                  <div className="flex justify-between">
                    <div>
                      <Link
                        to={post.fields.slug}
                        className="group text-xs inline-block"
                      >
                        <ArrowSlide>Read more</ArrowSlide>
                      </Link>
                    </div>
                    <Tag tags={tags} activeTag={activeTag} />
                  </div>
                </div>
              </article>
            )
          })
        ) : (
          <p className="text-center">No blog posts found.</p>
        )}
        {pageContext.numPages > 1 && <Pagination pageContext={pageContext} />}
      </>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          description
          featuredImageAlt
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 200, height: 200)
            }
          }
        }
      }
    }
  }
`
