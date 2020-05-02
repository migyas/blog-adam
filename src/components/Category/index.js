import React from "react"
import Grid from "../Grid"

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Category = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "card1.png" }) {
        childImageSharp {
          fixed(width: 213, height: 241) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Grid>
      <S.CategoyWrapper>
        <S.CategoryTitle>Categorias</S.CategoryTitle>
        <S.CategoryShowAll href="#">Ver todas as categorias</S.CategoryShowAll>
      </S.CategoyWrapper>

      <S.CategoryList>
        <S.CategoryLink>
          <Img fixed={cardImage.childImageSharp.fixed} />
          <S.CategoryItem>UI Design</S.CategoryItem>
        </S.CategoryLink>
      </S.CategoryList>
    </Grid>
  )
}

export default Category
