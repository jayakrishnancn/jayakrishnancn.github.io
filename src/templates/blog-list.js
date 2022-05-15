import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { getChaiTime } from "../utils/timeCalc"
import { GatsbyImage } from "gatsby-plugin-image"
import Pagination from "../components/Pagination"
import Tag from "../components/Tag"
import Card from "../components/Card"

const BlogIndex = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes || []
  const { tag: activeTag } = pageContext || {}

  return (
    <Layout>
      <Seo title={activeTag ?? "Blog"} />
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

          const content = (
            <article className="w-full flex flex-col justify-between md:text-left">
              <header>
                <h2 itemProp="headline">
                  <Link to={slug}>{title}</Link>
                </h2>
                <p className="text-gray-600">
                  <small>{date}</small>
                  <small> &#8226; {getChaiTime(timeToRead)}</small>
                </p>
              </header>
              <section className="flex-1 m-0">
                <p
                  className="text-gray-600 m-0"
                  dangerouslySetInnerHTML={{
                    __html: description || excerpt,
                  }}
                  itemProp="description"
                />
              </section>
              <div className="flex mt-2 justify-between items-center">
                <Tag tags={tags} activeTag={activeTag} />

                <Link to={post.fields.slug} className="btn-primary">
                  Read more
                </Link>
              </div>
            </article>
          )
          return (
            <Card
              image={
                gatsbyImageData && (
                  <>
                    <GatsbyImage
                      className="h-auto hidden sm:block"
                      alt={featuredImageAlt || title}
                      image={gatsbyImageData}
                    />
                  </>
                )
              }
              key={slug}
            >
              {content}
            </Card>
          )
        })
      ) : (
        <p className="text-center">No blog posts found.</p>
      )}
      {pageContext.numPages > 1 && <Pagination pageContext={pageContext} />}
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
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
