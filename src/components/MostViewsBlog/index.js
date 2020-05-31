import React from "react"
import Grid from "../Grid"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const MostViewsBlog = () => {
  const {
    allMarkdownRemark: { edges: allMostViewsBlog },
  } = useStaticQuery(graphql`
    query MostViewsBlog {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 4
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

  if (!allMostViewsBlog.length) {
    return false
  }

  return (
    <Grid>
      <S.ViewsBlogWrapper>
        <S.ViewsBlogHeader>
          <h1>Mais vistos no blog</h1>
        </S.ViewsBlogHeader>

        <S.ViewsBlogGroup>
          {allMostViewsBlog.map(({ node: item }, index) => {
            if (index !== -3) {
              return (
                <S.ViewsBlogItem to={item.fields.slug}>
                  <S.ViewsBlogDetail>
                    <p>
                      BY &nbsp;&nbsp;<strong>ADAM DIAS</strong>{" "}
                      &nbsp;&nbsp;IN&nbsp;&nbsp;
                      <strong>{item.frontmatter.category}</strong>
                    </p>
                    <h2>{item.frontmatter.title}</h2>
                    <p>{item.frontmatter.description}</p>
                  </S.ViewsBlogDetail>
                  <S.ViewsBlogImg
                    src={item.frontmatter.image}
                    alt="views post"
                    title="views post1"
                  />
                </S.ViewsBlogItem>
              )
            }
            return false
          })}

          {/* <S.ViewsBlogItem to="/">
            <S.ViewsBlogDetail>
              <p>
                BY &nbsp;&nbsp;<strong>ADAM DIAS</strong>{" "}
                &nbsp;&nbsp;IN&nbsp;&nbsp;
                <strong>{category}</strong>
              </p>
              <h2>{title}</h2>
              <p>{description}</p>
            </S.ViewsBlogDetail>
            <S.ViewsBlogImg src={views2} alt="views post" title="views post2" />
          </S.ViewsBlogItem>

          <S.ViewsBlogItem to="/">
            <S.ViewsBlogDetail>
              <p>
                BY &nbsp;&nbsp;<strong>ADAM DIAS</strong>{" "}
                &nbsp;&nbsp;IN&nbsp;&nbsp;
                <strong>{category}</strong>
              </p>
              <h2>{title}</h2>
              <p>{description}</p>
            </S.ViewsBlogDetail>
            <S.ViewsBlogImg src={views3} alt="views post" title="views post3" />
          </S.ViewsBlogItem> */}
        </S.ViewsBlogGroup>
      </S.ViewsBlogWrapper>
    </Grid>
  )
}

export default MostViewsBlog
