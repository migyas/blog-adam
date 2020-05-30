import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
// import Pagination from "../components/Pagination"

import * as S from "../components/ListWrapper/styled"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges.node

  return (
    <Layout>
      <SEO
        title={postList.frontmatter.title}
        description={postList.frontmatter.description}
        image={postList.frontmatter.image}
      />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { category, date, description, title },
            },
          }) => (
            <PostItem
              slug={slug}
              category={category}
              date={date}
              title={title}
              description={description}
            />
          )
        )}
      </S.ListWrapper>
    </Layout>
  )
}

export const query = graphql`
  query List {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            tag
          }
        }
      }
    }
  }
`

export default BlogList
