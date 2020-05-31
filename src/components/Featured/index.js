import React from "react"
import Grid from "../Grid"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Featured = () => {
  const { allMarkdownRemark: { edges: allFeatured } } = useStaticQuery(graphql`
    query Feat {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 5
        filter: { frontmatter: { tag: { eq: "destaque" } } }
      ) {
        edges {
          node {
            frontmatter {
              category
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

  if (!allFeatured.length) {
    return false
  }

  const firstFeatured = allFeatured[0].node

  return (
    <Grid>
      <S.FeaturedWrapper>
        <S.FeaturedHeader>
          <S.FeaturedTitle>Em destaque</S.FeaturedTitle>
          <S.FeaturedAllPost href="/posts">
            Ver todos os artigos
          </S.FeaturedAllPost>
        </S.FeaturedHeader>

        <S.FeaturedPosts>
          <S.FeaturedBackground image={firstFeatured.frontmatter.image} to={firstFeatured.fields.slug}>
            <S.FeaturedInfo>
              BY &nbsp;&nbsp;&nbsp;ADAM DIAS
              &nbsp;&nbsp;&nbsp;IN&nbsp;&nbsp;&nbsp;{" "}
              {firstFeatured.frontmatter.category}
            </S.FeaturedInfo>
            <S.FeaturedTitlePost>
              {firstFeatured.frontmatter.title}
            </S.FeaturedTitlePost>
            <S.FeaturedDescription>
              {firstFeatured.frontmatter.description}
            </S.FeaturedDescription>
          </S.FeaturedBackground>

          <S.FeaturedList>
            {allFeatured.map(({ node: item }, index) => {
                if (index !== 0) {
                  return (
                    <S.FeaturedItem to={item.fields.slug}>
                      <p className="title">{item.frontmatter.title}</p>
                      <p className="description">
                        {item.frontmatter.description}
                      </p>
                    </S.FeaturedItem>
                  )
                }

                return false
              })}
          </S.FeaturedList>
        </S.FeaturedPosts>
      </S.FeaturedWrapper>
    </Grid>
  )
}

export default Featured
