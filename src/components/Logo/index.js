import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Logo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logo-white.png" }) {
          childImageSharp {
            fixed(width: 98, height: 30) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <Link href="/" title="Home">
      <Img fixed={logoImage.childImageSharp.fixed} />
    </Link>
  )
}

export default Logo
