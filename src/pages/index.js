import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Slide from "../components/Slide"
import imagetest from "../images/photo-post.png"
import Category from "../components/Category"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slide
      category="React"
      image={imagetest}
      title="How to Create a PayPal Donate Button for Your WordPress Site"
      description="User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."
    />
    <Category />
  </Layout>
)

export default IndexPage
