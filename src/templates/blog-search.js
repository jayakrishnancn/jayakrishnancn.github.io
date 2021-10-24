import React from "react"
import { graphql } from "gatsby"
import BlogIndex from "./blog-list"
const BlogSearch = props => {
  return <BlogIndex {...props} />
}

export default BlogSearch

export const pageQuery = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
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
