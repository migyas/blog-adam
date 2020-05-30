import React from "react"
import Grid from "../Grid"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const MostViews = () => {
  const {
    allMarkdownRemark: { edges: allMostViews },
  } = useStaticQuery(graphql`
    query MostViews {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 2
      ) {
        edges {
          node {
            frontmatter {
              category
              title
              description
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

  if (!allMostViews.length) {
    return false
  }

  return (
    <Grid>
      <S.MostViewsWrapper>
        <S.MostViewsHeader>
          <h1>Mais vistos do mês</h1>
        </S.MostViewsHeader>

        <S.MostViewsGroup>
          {allMostViews.map(({ node: item }, index) => {
            if (index !== -3) {
              return (
                <S.MostViewsItem to={item.fields.slug}>
                  <img
                    src={item.frontmatter.image}
                    alt="posts most views"
                    title="Most Views Post"
                  />
                  <p>
                    BY &nbsp;&nbsp;<strong>ADAM DIAS</strong>{" "}
                    &nbsp;&nbsp;IN&nbsp;&nbsp;
                    <strong>{item.frontmatter.category}</strong>
                  </p>
                  <h2>{item.frontmatter.title}</h2>
                  <p>{item.frontmatter.description}</p>
                </S.MostViewsItem>
              )
            }
            return false
          })}
        </S.MostViewsGroup>
      </S.MostViewsWrapper>
    </Grid>
  )
}

export default MostViews
