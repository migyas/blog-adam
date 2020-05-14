import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Slide from "../components/Slide"
import Category from "../components/Category"
import Featured from "../components/Featured"
import MostViews from "../components/MostViews"
import ViewsBlog from "../components/MostViewsBlog"

import imageheader from "../images/photo-post.png"
import imagefeatured from "../../static/assets/img/featured.png"
import imageviews from "../../static/assets/img/mostviews.png"

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
    <MostViews image={imageviews} category="RESOURCE" />

    <ViewsBlog
      title="Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"
      description="User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."
      category="TUTORIALS"
    />
  </Layout>
)

export default IndexPage
