import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Slide from "../components/Slide"

const SearchPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 5
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              category
              image
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Search" />
      {postList.map(
        ({
          node: {
            frontmatter: { title, description, category, image },
            fields: { slug },
          },
        }) => (
          <Slide
            slug={slug}
            category={category}
            image={image}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default SearchPage
