import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Slide from "../components/Slide"
import Category from "../components/Category"
import Featured from "../components/Featured"
import MostViews from "../components/MostViews"
import ViewsBlog from "../components/MostViewsBlog"

// IMAGES ESTÁTICAS
import imageheader from "../images/photo-post.png"
import imagefeatured from "../../static/assets/img/featured.png"
import imageviews from "../../static/assets/img/mostviews.png"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Slide {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              category
              date
              title
              image
              description
              tag
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const slide = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {slide.map(
        ({
          node: {
            frontmatter: { category, date, description, title },
            fields: { slug },
          },
        }) => (
          <Slide
            slug={slug}
            category={category}
            date={date}
            title={title}
            image={imageheader}
            description={description}
          />
        )
      )}
      <Category />

      <Featured />
      
      <MostViews image={imageviews} category="RESOURCE" />

      <ViewsBlog
        title="Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"
        description="User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."
        category="TUTORIALS"
      />
    </Layout>
  )
}

export default IndexPage
