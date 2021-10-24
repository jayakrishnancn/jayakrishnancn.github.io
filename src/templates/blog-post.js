import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getChaiTime } from "../utils/timeCalc"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteUrl = data.site.siteMetadata?.siteUrl || `Title`
  const { previous, next } = data

  const featuredImgFluid =
    post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData

  return (
    <Layout title={siteTitle} siteUrl={siteUrl}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div id="page-top"></div>
      <article itemScope itemType="http://schema.org/Article">
        {featuredImgFluid && (
          <GatsbyImage
            alt="cover image"
            className="rounded my-5"
            image={featuredImgFluid}
          />
        )}
        <header>
          <div id="page-header"></div>
          <h1 itemProp="headline" className="text-2xl font-bold text-primary">
            {post.frontmatter.title}
          </h1>
          <p className="text-muted">
            <small>{post.frontmatter.date}</small>
            <small> &#8226; {getChaiTime(post?.timeToRead)}</small>
          </p>
        </header>
        <div id="page-content"></div>
        <section
          className="text-gray-500 article-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <div id="page-footer"></div>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <div id="page-bottom-nav"></div>
        <ul className="blog-post-nav-ul">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <div id="page-bottom"></div>
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
