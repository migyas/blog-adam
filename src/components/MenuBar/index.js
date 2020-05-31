import React from "react"

import SocialLinks from "../SocialLinks"
import Grid from "../Grid"
import Logo from "../Logo"
import MenuIcons from "../MenuIcons"

import * as S from "./styled"

const MenuBar = () => (
  <Grid>
    <S.MenuBox>
      <S.MenuBarWrapper>
        <S.MenuBarGroup>
          <SocialLinks />
        </S.MenuBarGroup> 

        <S.MenuBarGroup>
          <Logo />
        </S.MenuBarGroup>

        <S.MenuBarGroup>
          <MenuIcons />
        </S.MenuBarGroup>
      </S.MenuBarWrapper>
    </S.MenuBox>
  </Grid>
)

export default MenuBar
