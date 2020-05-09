import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Slide from "../components/Slide"
import imageheader from "../images/photo-post.png"
import imagefeatured from "../../static/assets/img/featured.png"
import Category from "../components/Category"
import Featured from "../components/Featured"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slide
      category="React"
      image={imageheader}
      title="How to Create a PayPal Donate Button for Your WordPress Site"
      description="User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."
    />
    <Category />
    <Featured
      category="Design Process"
      image={imagefeatured}
      title="How to Quickly Fix WordPress Mixed Content Warnings (HTTPS/SSL)"
      description="User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."
    />
  </Layout>
)

export default IndexPage
