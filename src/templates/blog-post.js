import React from "react"
import Layout from "../components/Layout"
import Grid from "../components/Grid"

import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Grid>
        <h1>Title:{post.frontmatter.title}</h1>
        <p>Descrição:{post.frontmatter.description} data: {post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        category
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
    }
  }
`

export default BlogPost
