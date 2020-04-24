import React from "react"

import Grid from "../Grid"
import * as S from "./styled"

const Slide = ({ image, title, description, category }) => (
  <S.BackgroundImage image={image}>
    <Grid>
      <S.Info>BY Adam Dias IN {category}</S.Info>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </Grid>
  </S.BackgroundImage>
)

export default Slide
