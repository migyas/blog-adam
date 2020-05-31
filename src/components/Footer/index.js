import React from "react"
import Grid from "../Grid"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"

import logo from "../../../static/assets/img/logo-silver.png"

const Footer = () => {
  return (
    <Grid>
      <S.FooterWrapper>
        <a href="/">
          <img src={logo} title="Home" alt="logo footer" />
        </a>
        <SocialLinks color="#9b9b9b" />
        <span>All Rights Reserved 2020 Adam Dias</span>
      </S.FooterWrapper>
    </Grid>
  )
}

export default Footer
