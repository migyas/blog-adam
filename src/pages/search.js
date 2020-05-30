import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Slide from "../components/Slide"

import imageheader from "../images/photo-post.png"

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
            frontmatter: { slug, title, description, category },
          },
        }) => (
          <Slide
            slug={slug}
            category={category}
            image={imageheader}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default SearchPage
