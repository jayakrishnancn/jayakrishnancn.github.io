import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getChaiTime } from "../utils/timeCalc"
import { GatsbyImage } from "gatsby-plugin-image"
import Pagination from "../components/Pagination"

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteUrl = data.site.siteMetadata?.siteUrl || `#`
  const posts = data.allMarkdownRemark.nodes || []
  console.log(pageContext)
  return (
    <Layout location={location} title={siteTitle} siteUrl={siteUrl}>
      <>
        <Seo title="Blog" />
        <Bio />
        {posts.length > 0 ? (
          posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const featuredImgFluid =
              post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
            return (
              <article
                key={post.fields.slug}
                className="flex shadow-md rounded-md mb-5"
                itemScope
                itemType="http://schema.org/Article"
              >
                {featuredImgFluid && (
                  <GatsbyImage
                    alt={post.frontmatter.featuredImageAlt || title}
                    className="rounded-l-md h-auto hidden sm:block"
                    image={featuredImgFluid}
                  />
                )}
                <div className="p-5  md:text-left space-y-4">
                  <header>
                    <h1
                      itemProp="headline"
                      className="text-2xl text-primary font-semibold"
                    >
                      <Link to={post.fields.slug}>{title}</Link>
                    </h1>
                    <p className="text-muted mb-2">
                      <small>{post.frontmatter.date}</small>
                      <small> &#8226; {getChaiTime(post?.timeToRead)}</small>
                    </p>
                  </header>
                  <section>
                    <p
                      className="text-gray-500 p-0 m-0"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                  <Link
                    to={post.fields.slug}
                    className="group text-xs inline-block"
                  >
                    Read more
                    <span className="transform transition-all -translate-x-1 absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
                      ➞
                    </span>
                  </Link>
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
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        wordCount {
          words
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
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
