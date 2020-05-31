import React from "react"
import PropTypes from "prop-types"

import Grid from "../Grid"
import * as S from "./styled"

const Slide = ({ slug, image, title, description, category }) => (

  
  <S.BackgroundImage to={slug} image={image}>
    <Grid>
      <S.Info>
        BY &nbsp;&nbsp; Adam Dias &nbsp;&nbsp; IN &nbsp;&nbsp; {category}
      </S.Info>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </Grid>
  </S.BackgroundImage>
)

Slide.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

export default Slide
